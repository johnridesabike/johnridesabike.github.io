import {edges2Dict, nodeFields} from "../utils";
import {graphql, useStaticQuery} from "gatsby";
import Excerpt from "../components/excerpt";
import Icons from "../components/icons";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import classNames from "classnames";
import styles from "./index.module.css";

export function Woodworking() {
    const query = useStaticQuery(graphql`
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
    const pages = edges2Dict(query.allMarkdownRemark.edges);
    return(
        <section className={classNames(styles.section)}>
            <header className={styles.sectionHeader}>
                <h1>
                    <Icons.Tool height="1em" width="1em"/>{" "}
                    Woodworking projects
                </h1>
                <p>
                    Woodworking stuff goes here.
                </p>
            </header>
            <Excerpt
                {... nodeFields(pages["marble-top-chessboard-end-table"])}
            >
                This is a guide I wrote based on an end-table I made with a
                marble chessboard and 2x4s.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["standing-desk-converter-diy"])}
            >
                This is a guide I wrote based on a project which converted a
                regular old desk into a modern standing desk.
            </Excerpt>
        </section>
    );
}

export default function Page() {
    return (
        <Layout entryHeader={<h1>Woodworking</h1>}>
            <SEO
                title="Woodworking"
                postSEO
            />
            <main id="main" className="site-main page-content">
                <Woodworking />
            </main>
        </Layout>
    );
}
