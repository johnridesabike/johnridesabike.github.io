import {useStaticQuery, graphql} from "gatsby";
export const useSiteMetadata = () => useStaticQuery(graphql`
query SiteMetadata {
    site {
        siteMetadata {
            title
            description
            author
        }
    }
}
`)

export const useWoodworkingCategory = () => useStaticQuery(graphql`
query woodworkingDocs {
    allMarkdownRemark(
        filter: {fields: {category: { eq: "woodworking"}}}
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