module SiteMetadata = {
  type t = {site}
  and site = {siteMetadata}
  and siteMetadata = {
    title: string,
    description: string,
    author: string,
  };
  [@bs.module "../quereySiteMetadata"]
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
  category: Js.Nullable.t(string),
  [@bs.as "slug"]
  pageSlug: string,
}
and frontmatter = {
  [@bs.as "title"]
  pageTitle: string,
  date: string,
  isoDate: string,
  thumbnail: Js.Nullable.t(thumbnail),
}
and thumbnail = {publicURL: string};
[@bs.module "../queryLibraryPages"]
external useLibraryPages: unit => query = "useLibraryPages";

[@bs.module "../querySoftwarePages"]
external useSoftwarePages: unit => query = "useSoftwarePages";

[@bs.module "../queryWoodPages"]
external useWoodworkingPages: unit => query = "useWoodworkingPages";

module ToProps = {
  type t = {
    isWide: bool,
    slug: string,
    thumbnailURL: option(string),
    title: string,
  };
  let getSlug = longSlug => Js.String2.split(longSlug, "/")[2];

  let dictOfEdges = query => {
    let dict = Js.Dict.empty();
    Js.Array2.forEach(
      query.allMarkdownRemark.edges,
      edge => {
        let slug = getSlug(edge.node.fields.pageSlug)->Option.getExn;
        Js.Dict.set(dict, slug, edge.node);
      },
    );
    dict;
  };

  let nodeFields = (node: node, f) =>
    f({
      isWide: Js.Nullable.isNullable(node.frontmatter.thumbnail),
      slug: node.fields.pageSlug,
      thumbnailURL:
        switch (Js.Nullable.toOption(node.frontmatter.thumbnail)) {
        | Some(thumbnail) => Some(thumbnail.publicURL)
        | None => None
        },
      title: node.frontmatter.pageTitle,
    });

  let make = (dict: Js.Dict.t(node), k, f) =>
    switch (Js.Dict.get(dict, k)) {
    | None => React.null
    | Some(node) =>
      f({
        isWide: Js.Nullable.isNullable(node.frontmatter.thumbnail),
        slug: node.fields.pageSlug,
        thumbnailURL:
          switch (Js.Nullable.toOption(node.frontmatter.thumbnail)) {
          | Some(thumbnail) => Some(thumbnail.publicURL)
          | None => None
          },
        title: node.frontmatter.pageTitle,
      })
    };
};