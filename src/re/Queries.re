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

type query = {allMarkdownRemark}
and allMarkdownRemark = {edges: array(edge)}
and edge = {node}
and node = {
  fields,
  excerpt: string,
  timeToRead: int,
  frontmatter,
}
and fields = {
  [@bs.as "slug"]
  pageSlug: string,
  parentDir: string,
  fullPath: string,
}
and frontmatter = {
  [@bs.as "title"]
  pageTitle: string,
  date: string,
  isoDate: string,
  thumbnail: Js.Nullable.t(thumbnail),
}
and thumbnail = {
  publicURL: string,
  childImageSharp: Js.Nullable.t(childImageSharp),
}
and childImageSharp = {fluid}
and fluid = {
  srcSet: string,
  src: string,
};
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
    Js.Array2.forEach(edges, ({node: {fields: {pageSlug}} as node}) =>
      Js.Dict.set(dict, pageSlug, node)
    );
    dict;
  };

  let nodeFields = (node, f) =>
    f({
      isWide: Js.Nullable.isNullable(node.frontmatter.thumbnail),
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

  let propsOfDict = (dict: Js.Dict.t(node), k, f) =>
    switch (Js.Dict.get(dict, k)) {
    | None => React.null
    | Some(node) => nodeFields(node, f)
    };
};
