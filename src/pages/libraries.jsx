import {edges2Dict, nodeFields} from "../utils";
import {graphql, useStaticQuery} from "gatsby";
import Excerpt from "../components/excerpt";
import Icons from "../components/icons";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import classNames from "classnames";
import styles from "./index.module.css";

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
                {... nodeFields(pages["academic-library-student-support"])}
            >
                Here, I walk through a hypothetical student project and
                explain how I, as an academic librarian, would assist
                throughout the process.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["open-access-presentation"])}
            >
                These are the slides and notes from a presentation I did on
                the state of open access in academic libraries.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["academic-library-faculty-support"])}
            >
                I describe several key topics affecting academic libraries
                and how I could assist faculty with them: data management
                plans, open access, and intellectual property policy.
            </Excerpt>
            <Excerpt
                {... nodeFields(
                    pages["data-management-plan-evolving-pronouns"]
                )}
            >
                In conjunction with my student support project, this is an
                example data management plan I created.
            </Excerpt>

            <h3 className={styles.divider}>Technical services</h3>
            <Excerpt
                {... nodeFields(pages["ex-libris-opac-analysis"])}
            >
                I explain the pros and cons of using the Ex Libris OPAC
                for an academic library.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["collection-development-policy"])}
            >
                I worked with a team to create this original collection
                development policy a fictional library and critiqued three
                existing policies.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["selection-policy-materials"])}
            >
                I selected books with funds donated to a fictional
                university library. To aid selection, I compared policies
                from similar, real-world, institutions.
            </Excerpt>

            <h2 className={styles.divider}>Research</h2>
            <Excerpt
                {... nodeFields(pages["library-twitter-r-presentation"])}
            >
                These are the slides and notes from a presentation I did
                on using language analysis of Twitter accounts with the R
                programming language.
            </Excerpt>
            <Excerpt
                {... nodeFields(
                    pages["researching-hispanic-children-books"]
                )}
            >
                I worked with a team that researched the distribution of
                Hispanic and Latino children's books in various US
                libraries.
            </Excerpt>
            <Excerpt
                {... nodeFields(pages["environmental-analysis"])}
                className={styles.excerpt}
            >
                I wrote this analysis of the community surrounding the
                Chattahoochee Valley Libraries in Columbus, GA.
            </Excerpt>
        </section>
        <section className={classNames(styles.section)}>
            <header className={styles.sectionHeader}>
                <h1>
                    <Icons.Library height="1em" width="1em"/>{" "}
                    Public library work
                </h1>
                <p>
                    In addition to my academic career, I've worked in a
                    public library for several years. These are a few of the
                    projects I've worked on during that time.
                </p>
            </header>
            <Excerpt
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
