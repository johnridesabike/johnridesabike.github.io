type frontmatter = {
  slug: option(string),
  date: option(string),
};

type internal = {
  [@bs.as "type"]
  nodeType: string,
};

type fields = {slug: option(string)};

type parent;

type node = {
  fields,
  internal,
  parent,
  frontmatter: option(frontmatter),
};

type fileNode = {relativePath: string};

type edge = {node};

type allMarkdownRemark = {edges: array(edge)};

type data = {allMarkdownRemark};

type graphqlResult = {
  errors: option(Js.Exn.t),
  data,
};

type createNodeFieldInput;
[@bs.obj]
external field:
  (~name: string, ~node: node, ~value: string, unit) => createNodeFieldInput;

type context;
[@bs.obj] external context: (~slug: string, unit) => context;

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
  node,
  actions,
  getNode: (. parent) => fileNode,
  graphql: (. string) => Js.Promise.t(graphqlResult),
};

let onCreateNode = ({node, actions: {createNodeField}, getNode}) =>
  switch (node) {
  | {internal: {nodeType: "MarkdownRemark"}, parent} =>
    let fileNode = getNode(. parent);
    let parsedFilePath = NodeJs.Path.parse(fileNode.relativePath);
    let slug =
      switch (parsedFilePath) {
      | {name: "index"} => "/" ++ parsedFilePath.dir ++ "/"
      | {dir: ""} => "/" ++ parsedFilePath.name ++ "/"
      | _ => "/" ++ parsedFilePath.dir ++ "/" ++ parsedFilePath.name ++ "/"
      };
    createNodeField(. field(~name="slug", ~node, ~value=slug, ()));
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
                slug
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
          switch (edge.node.fields.slug) {
          | None => ()
          | Some(slug) =>
            createPage(.
              page(
                ~component=pageTemplate,
                ~context=context(~slug, ()),
                ~path=slug,
                (),
              ),
            )
          }
        )
    });
};
