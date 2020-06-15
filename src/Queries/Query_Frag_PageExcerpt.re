[%graphql
  {|
fragment PageExcerpt on MarkdownRemark {
      fields {
        slug
        fullPath
      }
      excerpt
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        isoDate: date
        thumbnail {
          caption
          image {
            publicURL
            sharpImg: childImageSharp {
              fixed(width: 600) {
                ...Query_Frag_ImageFixed.ImageFixed
              }
            }
          }
        }
      }
}|}
];

let query = PageExcerpt.query;

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
    | FixedImg(Query_Frag_ImageFixed.ImageFixed.t)
    | Null;
};

module ToProps = {
  type t = {
    isWide: bool,
    fullPath: string,
    thumbnail: Thumbnail.t,
    title: string,
  };

  let make = (~f) =>
    fun
    | Some({
        PageExcerpt.frontmatter: {title, thumbnail},
        fields: {fullPath},
      }) =>
      f(. {
        isWide:
          switch (thumbnail) {
          | Some(_thumbnail) => true
          | None => false
          },
        fullPath,
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
          | _ => Null
          },
        title,
      })
    | _ => React.null;
};
