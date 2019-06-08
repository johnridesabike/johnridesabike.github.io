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
                    These are the sundry software projects I've dabbled in over
                    the last few years.
                </p>
            </header>
            <Excerpt
                {... nodeFields(pages["chessahoochee"])}
            >
                A free, open-source Swiss chess tournament manager.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["ios-shortcuts"])}
                isWide={false}
            >
                These are a few iOS shortcut scripts that I've made.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["wordroom-a-pythonista-dictionary-app"])}
            >
                This is an iOS dictionary "app" built with Pythonista. It saves
                the words you look up and your notes on them.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["weracoba-wordpress-theme"])}
            >
                (Currently defunct.) This is a custom WordPress theme I created
                from scratch. I don't update it anymore since I stopped using
                WordPress for this site.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["literacy-alliance-wordpress"])}
                isWide={false}
            >
                In 2017, I redesigned a website for the local nonprofit Literacy
                Alliance using WordPress and SquareSpace.
            </Excerpt>
        </section>
    );
}

export default function Page() {
    return (
        <Layout>
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
