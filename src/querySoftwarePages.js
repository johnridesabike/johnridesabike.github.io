import { useStaticQuery, graphql } from "gatsby";
export const useSoftwarePages = () => useStaticQuery(graphql`
    query softwareDocs {
        allMarkdownRemark(
            filter: {fields: {category: { eq: "software"}}}
        ) {
            totalCount
            edges {
                node {
                    fields {
                        category
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