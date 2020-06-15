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
                ...Query_Frag_ImageFixed.ImageFixed
              }
            }
          }
        }
      }
    }
  }
}|}
];

let query = PageList.query;
