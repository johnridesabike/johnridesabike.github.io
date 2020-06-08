import { useStaticQuery, graphql } from "gatsby";
export const useWoodworkingPages = () => useStaticQuery(graphql`
query woodworkingDocs {
  allMarkdownRemark(filter: {fields: {parentDir: {eq: "woodworking"}}}) {
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
            publicURL
            sharpImg: childImageSharp {
              fixed(width: 600) {
                srcSet
                src
                height
                width
              }
            }
          }
        }
      }
    }
  }
}`);
