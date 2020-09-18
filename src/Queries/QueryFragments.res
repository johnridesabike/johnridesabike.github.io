%%raw(`import { graphql } from "gatsby"`)

%graphql(
 `
  fragment ImageFixed on ImageSharpFixed {
    src
    srcSet
    height
    width
  }
 `
)

let imageFixed = ImageFixed.query

%graphql(
  `
  fragment ImageFluid on ImageSharpFluid {
    srcSet
    src
    sizes
    aspectRatio
  }
  `
)

let imageFluid = ImageFluid.query

%graphql(
  `
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
  }
  `
)

let pageExcerpt = PageExcerpt.query

module Image = {
  type t = {
    src: string,
    alt: string,
  }
}

module Video = {
  type source = {
    src: string,
    type_: string,
  }
  type t = {
    height: string,
    width: string,
    sources: array<source>,
  }
}

module Thumbnail = {
  type t =
    | Video(Video.t)
    | Image(Image.t)
    | FixedImg(ImageFixed.t, string)
    | Null

  let make = x =>
    switch x {
    | Some({PageExcerpt.caption, image: {publicURL, sharpImg}}) =>
      switch (sharpImg) {
      | Some({fixed: Some(fixed)}) => FixedImg(fixed, caption)
      | _ =>
        switch (publicURL) {
        | Some(publicURL) => Image({src: publicURL, alt: caption})
        | None => Null
        }
      }
    | _ => Null
  }
}

%graphql(
  `
  fragment PageList on MarkdownRemarkConnection {
    totalCount
    edges {
      node {
        fields {
          slug
          fullPath
        }
        frontmatter {
          title
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
      }
    }
  }
  `
)

let pageList = PageList.query
