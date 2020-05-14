open! Belt;
module T = QueryTypes;

type graphqlResult = {
  errors: option(Js.Exn.t),
  data: T.query(T.GatsbyNode.node),
};

type createNodeFieldInput;
[@bs.obj]
external field:
  (~name: string, ~node: T.GatsbyNode.node, ~value: string, unit) =>
  createNodeFieldInput;

type context;
[@bs.obj] external context: (~fullPath: string, unit) => context;

type createPageInput;
[@bs.obj]
external page:
  (~component: string, ~context: context, ~path: string, unit) =>
  createPageInput;

type actions = {
  createNodeField: (. createNodeFieldInput) => unit,
  createPage: (. createPageInput) => unit,
};

type nodeApiHelpers = {
  node: T.GatsbyNode.node,
  actions,
  getNode: (.T.GatsbyNode.parent) => T.GatsbyNode.fileNode,
  graphql: (. string) => Js.Promise.t(graphqlResult),
};

let onCreateNode = ({node, actions: {createNodeField}, getNode}) =>
  switch (node) {
  | {internal: {nodeType: "MarkdownRemark"}, parent} =>
    let fileNode = getNode(. parent);
    let parsedFilePath = NodeJs.Path.parse(fileNode.relativePath);
    switch (parsedFilePath) {
    | {dir, name: "index"} =>
      let path = "/" ++ dir ++ "/";
      let dir' = dir->Js.String2.split(NodeJs.Path.sep);
      let parentDir =
        dir'
        ->Js.Array2.slice(~start=0, ~end_=Js.Array2.length(dir') - 1)
        ->Js.Array2.joinWith("/");
      let slug =
        switch (dir'[Js.Array2.length(dir') - 1]) {
        | None => ""
        | Some(slug) => slug
        };
      createNodeField(. field(~name="fullPath", ~node, ~value=path, ()));
      createNodeField(.
        field(~name="parentDir", ~node, ~value=parentDir, ()),
      );
      createNodeField(. field(~name="slug", ~node, ~value=slug, ()));
    | {dir: "", name} =>
      let path = "/" ++ name ++ "/";
      createNodeField(. field(~name="fullPath", ~node, ~value=path, ()));
      createNodeField(. field(~name="parentDir", ~node, ~value="", ()));
      createNodeField(. field(~name="slug", ~node, ~value=name, ()));
    | {dir, name} =>
      let path = "/" ++ dir ++ "/" ++ name ++ "/";
      createNodeField(. field(~name="fullPath", ~node, ~value=path, ()));
      createNodeField(. field(~name="parentDir", ~node, ~value=dir, ()));
      createNodeField(. field(~name="slug", ~node, ~value=name, ()));
    };
  | _ => ()
  };

let createPages = ({graphql, actions: {createPage}}) => {
  let pageTemplate =
    NodeJs.Path.resolve([|"src/templates/pageTemplate.jsx"|]);
  graphql(.
    {j|
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                fullPath
              }
            }
          }
        }
    }
    |j},
  )
  ->Promise.Js.fromBsPromise
  ->Promise.Js.flatMap(
      fun
      | {errors: None} as result => Promise.Js.resolved(result)
      | {errors: Some(exn)} => {
          failwith(Js.String.make(exn));
        },
    )
  ->Promise.Js.map(result => {
      result.data.allMarkdownRemark.edges
      ->Js.Array2.forEach(edge =>
          createPage(.
            page(
              ~component=pageTemplate,
              ~context=context(~fullPath=edge.node.fields.fullPath, ()),
              ~path=edge.node.fields.fullPath,
              (),
            ),
          )
        )
    });
};
