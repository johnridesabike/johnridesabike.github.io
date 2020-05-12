import { useStaticQuery, graphql } from "gatsby";
export const useSoftwarePages = () => useStaticQuery(graphql`
query softwareDocs {
  allMarkdownRemark(filter: {fields: {slug: {glob: "/software/*"}}}) {
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
}
`);
