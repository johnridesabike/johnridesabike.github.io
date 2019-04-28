import {useStaticQuery, graphql} from "gatsby";

export function useAllPages() {
    const query = useStaticQuery(graphql`
        query allPages {
            allMarkdownRemark(limit: 1000) {
                totalCount
                edges {
                    node {
                        fields {
                            category
                        }
                        excerpt
                        timeToRead
                        frontmatter {
                            title
                            date
                            slug
                        }
                    }
                }
            }
        }
    `);
    return query.allMarkdownRemark.edges;
}
