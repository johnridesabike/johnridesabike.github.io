/* eslint-disable camelcase */
module.exports = {
    siteMetadata: {
        title: "John Jackson",
        description: "Librarian portfolio & other projects.",
        author: "John Jackson"
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
                icon: "src/images/gatsby-icon.png"
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline
        // functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content`,
                name: "markdown-pages"
            }
        },
        "gatsby-transformer-remark",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
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
                    }
                ]
            }
        }
    ]
};
