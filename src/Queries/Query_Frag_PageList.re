[%%raw "import { graphql } from 'gatsby'"];

module ImageFixed = Query_Frag_ImageFixed;

[%graphql
  {|
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
}|};
  {inline: true}
];
