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
    }
  }
}|}
];

let query = PageList.query;
