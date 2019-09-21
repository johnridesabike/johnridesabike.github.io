import {edges2Dict, nodeFields} from "../utils";
import {graphql, useStaticQuery} from "gatsby";
import {make as Excerpt} from "../components/Excerpt.bs";
import * as Icons from "../components/Icons.bs";
import {make as Layout} from "../components/Layout.bs"
import React from "react";
import {make as SEO} from "../components/Seo.bs";
// import chessStockPhoto from "../images/chess.jpg";
import classNames from "classnames";
import styles from "./index.module.css";

const Chess = Icons.Chess[0]

export function Libraries() {
    const query = useStaticQuery(graphql`
        query libraryDocs {
            allMarkdownRemark(
                filter: {fields: {category: { eq: "libraries"}}}
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
        <>
        <section className={classNames(styles.section)}>
            <header className={styles.sectionHeader}>
                <h1>
                    <span role="img" aria-hidden>🎓</span>{" "}
                    MLIS portfolio
                </h1>
                <p>
                    I graduated with a master of library science degree from
                    the University of South Carolina with a focus on
                    academic and digital libraries. These pages include
                    samples of my work accomplished during that time.
                </p>
            </header>

            <h2 className={styles.divider}>Academic libraries</h2>
            <Excerpt
                isWide={false}
                {... nodeFields(pages["academic-library-student-support"])}
            >
                Here, I walk through a hypothetical student project and
                explain how I, as an academic librarian, would assist
                throughout the process.
            </Excerpt>
            <Excerpt
                isWide={false}
                {... nodeFields(pages["open-access-presentation"])}
            >
                These are the slides and notes from a presentation I did on
                the state of open access in academic libraries.
            </Excerpt>
            <Excerpt
                isWide={false}
                {... nodeFields(pages["academic-library-faculty-support"])}
            >
                I describe several key topics affecting academic libraries
                and how I could assist faculty with them: data management
                plans, open access, and intellectual property policy.
            </Excerpt>
            <Excerpt
                isWide={false}
                {... nodeFields(
                    pages["data-management-plan-evolving-pronouns"]
                )}
            >
                In conjunction with my student support project, this is an
                example data management plan I created.
            </Excerpt>

            <h2 className={styles.divider}>Technical services</h2>
            <Excerpt
                isWide={false}
                {... nodeFields(pages["ex-libris-opac-analysis"])}
            >
                I explain the pros and cons of using the Ex Libris OPAC
                for an academic library.
            </Excerpt>
            <Excerpt
                isWide={false}
                {... nodeFields(pages["collection-development-policy"])}
            >
                I worked with a team to create this original collection
                development policy a fictional library and critiqued three
                existing policies.
            </Excerpt>
            <Excerpt
                isWide={false}
                {... nodeFields(pages["selection-policy-materials"])}
            >
                I selected books with funds donated to a fictional
                university library. To aid selection, I compared policies
                from similar, real-world, institutions.
            </Excerpt>

            <h2 className={styles.divider}>Research</h2>
            <Excerpt
                isWide={false}
                {... nodeFields(pages["library-twitter-r-presentation"])}
            >
                These are the slides and notes from a presentation I did
                on using language analysis of Twitter accounts with the R
                programming language.
            </Excerpt>
            <Excerpt
                isWide={false}
                {... nodeFields(
                    pages["researching-hispanic-children-books"]
                )}
            >
                I worked with a team that researched the distribution of
                Hispanic and Latino children's books in various US
                libraries.
            </Excerpt>
            <Excerpt
                isWide={false}
                {... nodeFields(pages["environmental-analysis"])}
                className={styles.excerpt}
            >
                I wrote this analysis of the community surrounding the
                Chattahoochee Valley Libraries in Columbus, GA.
            </Excerpt>
        </section>
        <hr />
        <section className={classNames(styles.section)}>
            <header className={styles.sectionHeader}>
                <h1>
                    <Chess />{" "}
                    Chess at the library.
                </h1>
                <p>
                    While working at a public library for the last few years,
                    I've developed an all-ages chess program. These are a few
                    resources I created to help facilitate it
                </p>
            </header>
            <h2 className={styles.divider}>Chess articles</h2>
            <Excerpt
                isWide={false}
                // eslint-disable-next-line max-len
                title="Your Library’s First Chess Tournament: From Opening to Endgame"
                // eslint-disable-next-line max-len
                slug="http://programminglibrarian.org/articles/your-library’s-first-chess-tournament-opening-endgame"
                // thumbnailURL={chessStockPhoto}
                isExternal
            >
                I've published a guide to running a library chess tournament on
                {" "}<em>Programming Librarian</em>. It covers all of the basic
                knowledge such as scorekeeping and pairing, plus other tips that
                a library worker (or anyone directing a tournament) would need
                to know.
            </Excerpt>
            <Excerpt
                isWide={false}
                {... nodeFields(pages["how-play-chess"])}
            >
                I've run a succesful chess program since 2017. At the time,
                I couldn't find any satisfactory guides to give to
                participants. This is one that I wrote myself which aims to
                cover all of the necessary knowledge without being too long
                or too short.
            </Excerpt>
        </section>
        </>
    );
}

export default function Page() {
    return (
        <Layout>
            <SEO
                title="Libraries"
                postSEO
            />
            <main id="main" className="site-main page-content">
                <Libraries />
            </main>
        </Layout>
    );
}
