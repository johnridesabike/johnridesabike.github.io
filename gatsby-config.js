/* eslint-disable camelcase */
const path = require("path");
require("dotenv").config();

module.exports = {
    siteMetadata: {
        title: "John Jackson",
        description: "Librarian portfolio & other projects.",
        author: "John Jackson",
        siteUrl: "https://johnridesa.bike/"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                // This path is relative to the root of the site.
                icon: "src/images/logo.png"
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content`,
                name: "pages"
            }
        },
        {
            resolve: "gatsby-plugin-categories",
            options: {
                templatePath: `${__dirname}/src/templates/category.jsx`
            }
        },
        // "gatsby-transformer-remark",
        {
            resolve: "gatsby-plugin-postcss",
            options: {
                postCssPlugins: [
                    require("postcss-custom-properties")({
                        importFrom: "./src/styles/variables.css"
                    })]
            }
        },
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-mdx",
            options: {
                defaultLayouts: {
                    default: path.resolve(
                        "./src/templates/pageMDXTemplate.jsx"
                    )
                }
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                "excerpt_separator": "<!-- more -->",
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            // It's important to specify the maxWidth (in
                            // pixels) of the content container as this plugin
                            // uses this as the base for generating different
                            // widths of each image.
                            maxWidth: 1200
                        }
                    },
                    "gatsby-remark-static-images",
                    "gatsby-remark-copy-linked-files",
                    "gatsby-remark-grid-tables",
                    "gatsby-remark-attr",
                    {
                        resolve: "gatsby-remark-prismjs",
                        options: {
                            // Class prefix for <pre> tags containing syntaxhighlighting;
                            // defaults to 'language-' (eg <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (eg for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: "language-",
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in src/layouts/index.js
                            // right after importing the prism color scheme:
                            //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false
                        }
                    }
                ]
            }
        },
        // "gatsby-plugin-breadcrumb",
        // {
        //     resolve: "gatsby-plugin-breadcrumb",
        //     options: {
        //         sitemapPath: "/sitemap.xml"
        //     }
        // }
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "GitHub",
                fieldName: "github",
                // Url to query from
                url: "https://api.github.com/graphql",
                // HTTP headers
                headers: {
                    // Learn about environment variables:
                    // https://gatsby.dev/env-vars
                    Authorization: `bearer ${process.env.GITHUB_TOKEN}`
                },
                // Additional options to pass to node-fetch
                fetchOptions: {}
            }
        }
    ]
};