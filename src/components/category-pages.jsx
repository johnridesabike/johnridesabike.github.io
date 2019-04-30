import React from "react";
import {StaticQuery, graphql} from "gatsby";

const Excerpt = ({node}) => (
    <div>
        <h2>{node.frontmatter.title}</h2>
        <p>{node.excerpt}</p>
    </div>
);

const CategoryPages = ({category}) => (
    <StaticQuery
        query={graphql`
            {
                allMarkdownRemark(
                    limit: 1000
                    filter: {fields: {category: {eq: "woodworking"}}}
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
                                date
                            }
                        }
                    }
                }
            }
        `}
        render={(data) =>
            data.allMarkdownRemark.edges.map((edge) => (
                <Excerpt node={edge.node} key={edge.node.frontmatter.slug} />
            ))
        }
    />
);

export default CategoryPages;