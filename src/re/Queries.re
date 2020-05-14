module SiteMetadata = {
  type t = {site}
  and site = {siteMetadata}
  and siteMetadata = {
    title: string,
    description: string,
    author: string,
  };
  [@bs.module "../querySiteMetadata"]
  external useSiteMetadata: unit => t = "useSiteMetadata";
  let title = t => t.site.siteMetadata.title;
  let description = t => t.site.siteMetadata.description;
  let author = t => t.site.siteMetadata.author;
};

module T = QueryTypes;

type query = T.query(T.ListPages.node);

[@bs.module "../queryLibraryPages"]
external useLibraryPages: unit => query = "useLibraryPages";

[@bs.module "../querySoftwarePages"]
external useSoftwarePages: unit => query = "useSoftwarePages";

[@bs.module "../queryWoodPages"]
external useWoodworkingPages: unit => query = "useWoodworkingPages";

module Thumbnail = {
  type t = {
    src: string,
    srcSet: option(string),
  };
};

module ToProps = {
  type t = {
    isWide: bool,
    fullPath: string,
    thumbnail: option(Thumbnail.t),
    title: string,
  };

  let dictOfEdges = edges => {
    let dict = Js.Dict.empty();
    Js.Array2.forEach(
      edges, (T.{node: T.ListPages.{fields: {pageSlug}} as node}) =>
      Js.Dict.set(dict, pageSlug, node)
    );
    dict;
  };

  let nodeFields = (node, f) =>
    f({
      isWide: Js.Nullable.isNullable(node.T.ListPages.frontmatter.thumbnail),
      fullPath: node.fields.fullPath,
      thumbnail:
        switch (Js.Nullable.toOption(node.frontmatter.thumbnail)) {
        | Some({publicURL, childImageSharp}) =>
          switch (Js.Nullable.toOption(childImageSharp)) {
          | Some({fluid: {src, srcSet}}) =>
            Some({src, srcSet: Some(srcSet)})
          | None => Some({src: publicURL, srcSet: None})
          }
        | None => None
        },
      title: node.frontmatter.pageTitle,
    });

  let propsOfDict = (dict: Js.Dict.t(T.ListPages.node), k, f) =>
    switch (Js.Dict.get(dict, k)) {
    | None => React.null
    | Some(node) => nodeFields(node, f)
    };
};
