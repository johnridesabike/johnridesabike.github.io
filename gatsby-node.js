/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const config = require("./lib/js/GatsbyNode.bs.js");
exports.onCreateNode = config.onCreateNode;
exports.createPages = config.createPages;
exports.createSchemaCustomization = config.createSchemaCustomization;
exports.onCreatePage = config.onCreatePage;
