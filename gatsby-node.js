/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const _ = require("lodash");
const dashify = require("dashify");
const path = require("path");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

const postNodes = [];

// https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/gatsby-node.js
// eslint-disable-next-line complexity
exports.onCreateNode = function ({node, actions, getNode}) {
    const {createNodeField} = actions;
    let slug;
    if (node.internal.type === "MarkdownRemark") {
        const fileNode = getNode(node.parent);
        const parsedFilePath = path.parse(fileNode.relativePath);
        // if (
        //     Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
        //     Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
        // ) {
        //     slug = `/${_.kebabCase(node.frontmatter.title)}`;
        // } else if (
        if (
            parsedFilePath.name !== "index" &&
            parsedFilePath.dir !== ""
        ) {
            slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
        } else if (parsedFilePath.dir === "") {
            slug = `/${parsedFilePath.name}/`;
        } else {
            slug = `/${parsedFilePath.dir}/`;
        }

        if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
            if (
                Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
            ) {
                slug = `/${dashify(node.frontmatter.slug)}`;
            }
            if (
                Object.prototype.hasOwnProperty.call(node.frontmatter, "date")
            ) {
                const date = moment(
                    node.frontmatter.date,
                    siteConfig.dateFromFormat
                );
                if (!date.isValid) {
                    console.warn("WARNING: Invalid date.", node.frontmatter);
                }
                createNodeField({
                    name: "date",
                    node,
                    value: date.toISOString()
                });
            }
        }
        createNodeField({name: "slug", node, value: slug});
        postNodes.push(node);
    }
};

// exports.createPages = function ({actions, graphql}) {
//     const {createPage} = actions;

//     const pageTemplate = path.resolve("src/templates/pageTemplate.jsx");

//     return graphql(`
//         {
//             allMarkdownRemark(
//                 sort: {order: DESC, fields: [frontmatter___date]}
//                 limit: 1000
//             ) {
//                 edges {
//                     node {
//                         frontmatter {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `).then(function (result) {
//         if (result.errors) {
//             return Promise.reject(result.errors);
//         }

//         result.data.allMarkdownRemark.edges.forEach(function ({node}) {
//             createPage({
//                 path: node.frontmatter.slug,
//                 component: pageTemplate,
//                 context: {} // additional data can be passed via context
//             });
//         });
//     });
// };

exports.createPages = function ({graphql, actions}) {
    const {createPage} = actions;

    return new Promise(function (resolve, reject) {
        const pageTemplate = path.resolve("src/templates/pageTemplate.jsx");
        const categoryPage = path.resolve("src/templates/category.jsx");
        resolve(
            graphql(`
                {
                    allMarkdownRemark {
                        edges {
                            node {
                                frontmatter {
                                    category
                                }
                                fields {
                                    slug
                                }
                            }
                        }
                    }
                }
            `).then(function (result) {
                if (result.errors) {
                    /* eslint no-console: "off" */
                    console.log(result.errors);
                    reject(result.errors);
                }
                const categorySet = new Set();
                result.data.allMarkdownRemark.edges.forEach(function (edge) {
                    if (edge.node.frontmatter.category) {
                        categorySet.add(edge.node.frontmatter.category);
                    }
                    createPage({
                        component: pageTemplate,
                        context: {
                            slug: edge.node.fields.slug
                        },
                        path: edge.node.fields.slug
                    });
                });
                const categoryList = Array.from(categorySet);
                categoryList.forEach(function (category) {
                    createPage({
                        component: categoryPage,
                        context: {
                            category
                        },
                        path: `/category/${dashify(category)}/`
                    });
                });
            })
        );
    });
};
