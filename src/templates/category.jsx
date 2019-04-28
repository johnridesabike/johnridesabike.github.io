import React from "react";
import Helmet from "react-helmet";
import {graphql} from "gatsby";
import Layout from "../components/layout";

export default function CategoryTemplate({pageContext, data}) {
    const {category} = pageContext;
    return (
        <Layout>
            <div className="category-container">
                <Helmet title={`Posts in category "${category}"`} />
                {data.allMarkdownRemark.edges.map((edge) => (
                    <div key={edge.node.frontmatter.slug}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.excerpt}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query CategoryPage($category: String) {
        allMarkdownRemark(
            limit: 1000
            filter: {fields: {category: {eq: $category}}}
        ) {
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
`;
