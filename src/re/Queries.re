module SiteMetadata = {
  include QueryTypes.SiteMetadata;
  [@bs.module "../querySiteMetadata"]
  external useSiteMetadata: unit => t = "useSiteMetadata";
  let title = t => t.site.siteMetadata.title;
  let description = t => t.site.siteMetadata.description;
  let author = t => t.site.siteMetadata.author;
};

module T = QueryTypes;
module N = T.ListPages;

module Image = {
  [@bs.module "../queryImages"]
  external useImages: unit => T.Images.t = "useImages";
};

type query = T.query(N.node);

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
    Js.Array2.forEach(edges, (T.{node: N.{fields: {pageSlug}} as node}) =>
      Js.Dict.set(dict, pageSlug, node)
    );
    dict;
  };

  let nodeFields =
      (N.{frontmatter: {N.thumbnail, pageTitle}, fields: {N.fullPath}}, f) =>
    f(. {
      isWide: Js.Nullable.isNullable(thumbnail),
      fullPath,
      thumbnail:
        switch (Js.Nullable.toOption(thumbnail)) {
        | Some({publicURL, childImageSharp}) =>
          switch (Js.Nullable.toOption(childImageSharp)) {
          | Some({fluid: {src, srcSet}}) =>
            Some({src, srcSet: Some(srcSet)})
          | None => Some({src: publicURL, srcSet: None})
          }
        | None => None
        },
      title: pageTitle,
    });

  let propsOfDict = (dict, k, f) =>
    switch (Js.Dict.get(dict, k)) {
    | None => React.null
    | Some(node) => nodeFields(node, f)
    };
};
