/*
 module SiteMetadata: {
   type t = QueryTypes.SiteMetadata.t;
   [@bs.module "../querySiteMetadata"]
   external useSiteMetadata: unit => t = "useSiteMetadata";
   let title: t => string;
   let description: t => string;
   let author: t => string;
 };

 module Images: {
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
 */

module Image: {
  [@unboxed]
  type t = {src: string};
};

module Video: {
  type source = {
    src: string,
    type_: string,
  };
  type t = {
    height: string,
    width: string,
    sources: array(source),
  };
};

module Thumbnail: {
  type t =
    | Video(Video.t)
    | Image(Image.t)
    | FixedImg((Query.Fragments.ImageFixed.t))
    | Null;
};

module ToProps: {
  type t = {
    isWide: bool,
    fullPath: string,
    thumbnail: Thumbnail.t,
    title: string,
  };

  let dictOfEdges:
    array(Query.Fragments.PageList.t_edges) =>
    Js.Dict.t(Query.Fragments.PageList.t_edges_node);

  let propsOfDict:
    (
      Js.Dict.t(Query.Fragments.PageList.t_edges_node),
      string,
      (. t) => React.element
    ) =>
    React.element;
};
