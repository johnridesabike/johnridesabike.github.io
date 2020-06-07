module SiteMetadata: {
  type t = QueryTypes.SiteMetadata.t;
  [@bs.module "../querySiteMetadata"]
  external useSiteMetadata: unit => t = "useSiteMetadata";
  let title: t => string;
  let description: t => string;
  let author: t => string;
};

module Image: {
  [@bs.module "../queryImages"]
  external useImages: unit => QueryTypes.Images.t = "useImages";
};

type query = QueryTypes.query(QueryTypes.ListPages.node);

[@bs.module "../queryLibraryPages"]
external useLibraryPages: unit => query = "useLibraryPages";

[@bs.module "../querySoftwarePages"]
external useSoftwarePages: unit => query = "useSoftwarePages";

[@bs.module "../queryWoodPages"]
external useWoodworkingPages: unit => query = "useWoodworkingPages";

module Thumbnail: {
  type t = {
    src: string,
    srcSet: option(string),
  };
};

module ToProps: {
  type t = {
    isWide: bool,
    fullPath: string,
    thumbnail: option(Thumbnail.t),
    title: string,
  };

  let dictOfEdges:
    array(QueryTypes.edge(QueryTypes.ListPages.node)) =>
    Js.Dict.t(QueryTypes.ListPages.node);

  let propsOfDict:
    (Js.Dict.t(QueryTypes.ListPages.node), string, (. t) => React.element) =>
    React.element;
};
