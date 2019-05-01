import {useStaticQuery, graphql} from "gatsby";

export function useAllPages() {
    const query = useStaticQuery(graphql`
        query allPages {
            allMarkdownRemark(
                sort: {order: DESC, fields: [frontmatter___date]}
                limit: 1000
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
                            ISODate: date
                            thumbnail {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    `);
    return query.allMarkdownRemark.edges;
}
