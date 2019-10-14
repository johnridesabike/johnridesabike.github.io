import * as Icons from "../components/icons";
import {edges2Dict, nodeFields} from "../utils";
import {graphql, useStaticQuery} from "gatsby";
import Excerpt from "../components/Excerpt.bs";
import Layout from "../components/Layout.bs"
import React from "react";
import SEO from "../components/Seo.bs";
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
                            isoDate: date
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
                    The sundry software projects I've dabbled in over the
                    years. I do mostly coding and web design.
                </p>
            </header>
            <h2 className={styles.divider}>Apps and coding</h2>
            <Excerpt
                isWide={false}
                {... nodeFields(pages["coronate"])}
            >
                I created my own Swiss chess tournament manager with
                ReasonReact. It's free and open source for anyone to use, but
                especially designed for the needs of libraries and small clubs.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["ios-shortcuts"])}
                isWide={false}
            >
                These are a few iOS shortcut scripts that I've made.
            </Excerpt>
            <Excerpt
                isWide={false}
                {... nodeFields(pages["wordroom-a-pythonista-dictionary-app"])}
            >
                This is an iOS dictionary "app" built with Pythonista. It saves
                the words you look up and your notes on them.
            </Excerpt>
            <h2 className={styles.divider}>Web development</h2>
            <Excerpt
                {... nodeFields(pages["literacy-alliance-wordpress"])}
                isWide={false}
            >
                In 2017, I redesigned a website for the local nonprofit Literacy
                Alliance using WordPress and SquareSpace.
            </Excerpt>
            <Excerpt
                isWide={false}
                {... nodeFields(pages["weracoba-wordpress-theme"])}
            >
                (Currently defunct.) This is a custom WordPress theme I created
                from scratch. I don't update it anymore since I stopped using
                WordPress for this site.
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
