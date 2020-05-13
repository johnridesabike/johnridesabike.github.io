import { useStaticQuery, graphql } from "gatsby";
export const useSoftwarePages = () => useStaticQuery(graphql`
query softwareDocs {
  allMarkdownRemark(filter: {fields: {parentDir: {eq: "software"}}}) {
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
}
`);
