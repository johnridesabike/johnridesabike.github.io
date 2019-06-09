import {edges2Dict, nodeFields} from "../utils";
import {graphql, useStaticQuery} from "gatsby";
import Excerpt from "../components/excerpt";
// import Icons from "../components/icons";
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
                    <span role="img" aria-hidden>🛠</span>{" "}
                    Woodworking projects
                </h1>
                <p>
                    Sometimes I build furniture, and these are the guides I
                    wrote for them.
                </p>
            </header>
            <h2 className={styles.divider}>Guides</h2>
            <Excerpt
                {... nodeFields(pages["marble-top-chessboard-end-table"])}
            >
                I made a custom end-table with an old marble chessboard and some
                two-by-fours. This guide covers how it was done, and some tips
                for building your own.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["standing-desk-converter-diy"])}
            >
                I turned a old, regular desk into a fancy new standing desk.
                This covers how I did it, how you can make your own, and some
                general tips about standing desks.
            </Excerpt>
        </section>
    );
}

export default function Page() {
    return (
        <Layout>
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
