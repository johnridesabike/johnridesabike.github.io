import { useStaticQuery, graphql } from "gatsby";
export const useWoodworkingPages = () => useStaticQuery(graphql`
query woodworkingDocs {
  allMarkdownRemark(filter: {fields: {slug: {glob: "/woodworking/*"}}}) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          isoDate: date
          thumbnail {
            publicURL
          }
        }
      }
    }
  }
}`);
