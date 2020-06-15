/*
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

 module Images = {
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
 */

module Image = {
  /* I might add more fields to this later. */
  [@unboxed]
  type t = {src: string};
};

module Video = {
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

module Thumbnail = {
  type t =
    | Video(Video.t)
    | Image(Image.t)
    | FixedImg(Query.Fragments.ImageFixed.t)
    | Null;
};

module ToProps = {
  type t = {
    isWide: bool,
    fullPath: string,
    thumbnail: Thumbnail.t,
    title: string,
  };

  let dictOfEdges = edges => {
    let dict = Js.Dict.empty();
    Js.Array2.forEach(
      edges, (Query.Fragments.PageList.{node: {fields} as node}) =>
      switch (fields) {
      | {slug} => Js.Dict.set(dict, slug, node)
      }
    );
    dict;
  };

  let nodeFields =
      (
        {Query.Fragments.PageList.frontmatter: {thumbnail, title}, fields},
        f,
      ) =>
    f(. {
      isWide:
        switch (thumbnail) {
        | Some(_thumbnail) => true
        | None => false
        },
      fullPath: fields.fullPath,
      thumbnail:
        switch (thumbnail) {
        | Some({image: {publicURL, sharpImg}}) =>
          switch (sharpImg) {
          | Some({fixed: Some(fixed)}) => FixedImg(fixed)
          | _ =>
            switch (publicURL) {
            | Some(publicURL) => Image({src: publicURL})
            | None => Null
            }
          }
        | None => Null
        },
      title,
    });

  let propsOfDict = (dict, k, f) =>
    switch (Js.Dict.get(dict, k)) {
    | None => React.null
    | Some(node) => nodeFields(node, f)
    };
};
