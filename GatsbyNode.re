type parent;

type internal = {
  [@bs.as "type"]
  type_: string,
};

type node = {
  internal,
  parent,
};

type fileNode = {relativePath: string};

type field = {
  name: string,
  node,
  value: string,
};

type page('context) = {
  component: string,
  context: Js.t('context),
  mutable path: string,
};

type actions('context) = {
  createNodeField: (. field) => unit,
  createPage: (. page('context)) => unit,
  createTypes: (. string) => unit,
};

type graphqlResult('data) = {
  errors: option(Js.Exn.t),
  data: 'data,
};

type reporter = {panicOnBuild: (. string, Js.Exn.t) => unit};

type t('context, 'data) = {
  node,
  actions: actions('context),
  getNode: (. parent) => fileNode,
  graphql: (. string) => Js.Promise.t(graphqlResult('data)),
  reporter,
};

let onCreateNode = ({node, actions: {createNodeField, _}, getNode, _}) =>
  switch (node) {
  | {internal: {type_: "MarkdownRemark"}, parent} =>
    switch (NodeJs.Path.parse(getNode(. parent).relativePath)) {
    | {dir, name: "index", _} =>
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
    | {dir: "", name, _} =>
      let path = "/" ++ name ++ "/";
      createNodeField(. {node, name: "fullPath", value: path});
      createNodeField(. {node, name: "slug", value: name});
    | {dir, name, _} =>
      let path = "/" ++ dir ++ "/" ++ name ++ "/";
      createNodeField(. {node, name: "fullPath", value: path});
      createNodeField(. {node, name: "parentDir", value: dir});
      createNodeField(. {node, name: "slug", value: name});
    }
  | _ => ()
  };

let pageTemplate = NodeJs.Path.resolve([|"src", "Template_Page.bs.js"|]);

[%graphql
  {|
query AllMarkdown {
  allMarkdownRemark {
    edges {
      node {
        fields {
          fullPath
        }
      }
    }
  }
}|};
  {taggedTemplate: false}
];

let createPages =
    ({graphql, actions: {createPage, _}, reporter: {panicOnBuild}, _}) =>
  graphql(. AllMarkdown.query)
  ->Promise.Js.fromBsPromise
  ->Promise.Js.tap(
      fun
      | {errors: Some(errors), _} =>
        panicOnBuild(. "Error creating pages", errors)
      | {data: AllMarkdown.Raw.{allMarkdownRemark: {edges}}, _} =>
        Array.forEach(edges, ({node: {fields: {fullPath}}}) =>
          createPage(. {
            component: pageTemplate,
            context: Js.Obj.empty(),
            path: fullPath,
          })
        ),
    );

/**
 * De-nullify a lot of nullable fields.
 */
let createSchemaCustomization = ({actions: {createTypes, _}, _}) => {
  createTypes(.
    {|
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
      fields: Fields!
    }
    type Frontmatter {
      title: String!
      date: Date! @dateformat
      description: String!
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
    type Site {
      siteMetadata: SiteMetadata!
    }
    type SiteMetadata {
      title: String!
      description: String!
      author: String!
      siteUrl: String!
    }
  |},
  );
};

[@bs.val] [@bs.scope "Object"]
external clone: ([@bs.as {json|{}|json}] _, page('context)) => page('context) =
  "assign";

type pageActions('context) = {
  deletePage: (. page('context)) => unit,
  createPage: (. page('context)) => unit,
};

type onCreatePage('context) = {
  page: page('context),
  actions: pageActions('context),
};

/**
 * Fix *.bs.js files for pages.
 */
let onCreatePage = ({page, actions: {deletePage, createPage}}) => {
  let oldPage = clone(page);
  page.path =
    Js.String2.replaceByRe(page.path, [%bs.re "/(\\/index\\.bs\\/)$/"], "/");
  if (page.path != oldPage.path) {
    deletePage(. oldPage);
    createPage(. page);
  } else {
    page.path =
      Js.String2.replaceByRe(page.path, [%bs.re "/(\\.bs\\/)$/"], "/");
    if (page.path != oldPage.path) {
      deletePage(. oldPage);
      createPage(. page);
    };
  };
};
