import { useStaticQuery, graphql } from "gatsby";
export const useLibraryPages = () => useStaticQuery(graphql`
query libraryDocs {
    allMarkdownRemark(
        filter: {fields: {category: { eq: "libraries"}}}
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
}`);