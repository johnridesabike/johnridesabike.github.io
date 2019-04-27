/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.createPages = function ({actions, graphql}) {
    const {createPage} = actions;

    const pageTemplate = path.resolve("src/templates/pageTemplate.jsx");

    return graphql(`
        {
            allMarkdownRemark(
                sort: {order: DESC, fields: [frontmatter___date]}
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `).then(function (result) {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(function ({node}) {
            createPage({
                path: node.frontmatter.slug,
                component: pageTemplate,
                context: {} // additional data can be passed via context
            });
        });
    });
};
