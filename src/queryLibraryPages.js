import { useStaticQuery, graphql } from "gatsby";
export const useLibraryPages = () => useStaticQuery(graphql`
query libraryDocs {
  allMarkdownRemark(filter: {fields: {slug: {glob: "/libraries/*"}}}) {
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
