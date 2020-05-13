import { useStaticQuery, graphql } from "gatsby";
export const useLibraryPages = () => useStaticQuery(graphql`
query libraryDocs {
  allMarkdownRemark(filter: {fields: {parentDir: {eq: "libraries"}}}) {
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
          }
        }
      }
    }
  }
}`);
