import {edges2Dict, nodeFields} from "../utils";
import {graphql, useStaticQuery} from "gatsby";
import Excerpt from "../components/excerpt";
import Icons from "../components/icons";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import classNames from "classnames";
import styles from "./index.module.css";

export function Software() {
    const query = useStaticQuery(graphql`
        query softwareDocs {
            allMarkdownRemark(
                filter: {fields: {category: { eq: "software"}}}
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
                    <Icons.Software height="1em" width="1em"/>{" "}
                    Software projects
                </h1>
                <p>
                Software stuff goes here.
                </p>
            </header>
            <Excerpt
                {... nodeFields(pages["ios-shortcuts"])}
            >
                This is a guide I wrote based on an end-table I made with a
                marble chessboard and 2x4s.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["wordroom-a-pythonista-dictionary-app"])}
            >
                This is a guide I wrote based on an end-table I made with a
                marble chessboard and 2x4s.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["literacy-alliance-wordpress"])}
            >
                This is a guide I wrote based on an end-table I made with a
                marble chessboard and 2x4s.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["weracoba-wordpress-theme"])}
            >
                This is a guide I wrote based on an end-table I made with a
                marble chessboard and 2x4s.
            </Excerpt>
        </section>
    );
}

export default function Page() {
    return (
        <Layout entryHeader={<h1>Software</h1>}>
            <SEO
                title="Software"
                postSEO
            />
            <main id="main" className="site-main page-content">
                <Software />
            </main>
        </Layout>
    );
}
