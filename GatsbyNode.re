type parent;

type fields = {
  [@bs.as "slug"]
  fieldSlug: string,
  fullPath: string,
  parentDir: string,
};

type internal = {
  [@bs.as "type"]
  nodeType: string,
};

type frontmatter = {
  slug: option(string),
  date: option(string),
};

type node = {
  fields,
  internal,
  parent,
  frontmatter: option(frontmatter),
};

type fileNode = {relativePath: string};

type edge = {node};

type allMarkdownRemark = {edges: array(edge)};

type query = {allMarkdownRemark};

type graphqlResult = {
  errors: option(Js.Exn.t),
  data: query,
};

type field = {
  name: string,
  node,
  value: string,
};

type page('context) = {
  component: string,
  context: Js.t('context),
  path: string,
};

type actions('context) = {
  createNodeField: (. field) => unit,
  createPage: (. page('context)) => unit,
  createTypes: (. string) => unit,
};

type nodeApiHelpers('context) = {
  node,
  actions: actions('context),
  getNode: (. parent) => fileNode,
  graphql: (. string) => Js.Promise.t(graphqlResult),
};

let onCreateNode = ({node, actions: {createNodeField}, getNode}) =>
  switch (node) {
  | {internal: {nodeType: "MarkdownRemark"}, parent} =>
    switch (NodeJs.Path.parse(getNode(. parent).relativePath)) {
    | {dir, name: "index"} =>
      let path = "/" ++ dir ++ "/";
      let dir' = Js.String2.split(dir, NodeJs.Path.sep);
      let penultimateDirIndex = Js.Array2.length(dir') - 1;
      let parentDir =
        dir'
        ->Js.Array2.slice(~start=0, ~end_=penultimateDirIndex)
        ->Js.Array2.joinWith("/");
      let slug =
        switch (dir'[penultimateDirIndex]) {
        | None => ""
        | Some(slug) => slug
        };
      createNodeField(. {node, name: "fullPath", value: path});
      createNodeField(. {node, name: "parentDir", value: parentDir});
      createNodeField(. {node, name: "slug", value: slug});
    | {dir: "", name} =>
      let path = "/" ++ name ++ "/";
      createNodeField(. {node, name: "fullPath", value: path});
      createNodeField(. {node, name: "slug", value: name});
    | {dir, name} =>
      let path = "/" ++ dir ++ "/" ++ name ++ "/";
      createNodeField(. {node, name: "fullPath", value: path});
      createNodeField(. {node, name: "parentDir", value: dir});
      createNodeField(. {node, name: "slug", value: name});
    }
  | _ => ()
  };

let pageTemplate =
  NodeJs.Path.resolve([|"src", "re", "Template_Page.bs.js"|]);

let createPages = ({graphql, actions: {createPage}}) =>
  graphql(.
    {|
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
    }|},
  )
  ->Promise.Js.fromBsPromise
  ->Promise.Js.flatMap(
      fun
      | {errors: Some(exn)} => failwith(Js.String2.make(exn))
      | result => Promise.Js.resolved(result),
    )
  ->Promise.Js.map(({data: {allMarkdownRemark: {edges}}}) =>
      Array.forEach(edges, ({node: {fields: {fullPath}}}) =>
        createPage(. {
          component: pageTemplate,
          context: {
            "fullPath": fullPath,
          },
          path: fullPath,
        })
      )
    );

/**
 * De-nullify a lot of nullable fields.
 */
let createSchemaCustomization = ({actions: {createTypes}}) => {
  createTypes(.
    {|
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
      fields: Fields!
    }
    type Frontmatter {
      title: String!
      date: Date! @dateformat
      attachments: [File!] @fileByRelativePath
      thumbnail: Thumbnail
    }
    type Thumbnail {
      caption: String!
      image: File! @fileByRelativePath
    }
    type Fields {
      slug: String!
      fullPath: String!
    }
  |},
  );
};