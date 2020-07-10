[%%raw "import { graphql } from 'gatsby'"];

module ImageFixed = Query_Frag_ImageFixed;

[%graphql
  {|
fragment PageExcerpt on MarkdownRemark {
      fields {
        slug
        fullPath
      }
      frontmatter {
        title
        description
        thumbnail {
          caption
          image {
            publicURL
            sharpImg: childImageSharp {
              fixed(width: 600) {
                ...ImageFixed
              }
            }
          }
        }
      }
}|};
  {inline: true}
];

module Image = {
  type t = {
    src: string,
    alt: string,
  };
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
    | FixedImg(ImageFixed.t, string)
    | Null;

  let make =
    fun
    | Some({caption, image: {publicURL, sharpImg}}) =>
      switch (sharpImg) {
      | Some({fixed: Some(fixed)}) => FixedImg(fixed, caption)
      | _ =>
        switch (publicURL) {
        | Some(publicURL) => Image({src: publicURL, alt: caption})
        | None => Null
        }
      }
    | _ => Null;
};
