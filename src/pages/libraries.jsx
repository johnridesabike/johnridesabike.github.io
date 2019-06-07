import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {useStaticQuery, graphql} from "gatsby";
import {map, mergeAll, objOf} from "ramda";
import classNames from "classNames";
import {Link} from "gatsby";
// import Icons from "../components/icons";
// import VisuallyHidden from "@reach/visually-hidden";
import styles from "./libraries.module.css";
// import remark from "remark";
// import html from "remark-html";


// This assumes every long slug is `/directory/slug` format.
const getSlug = (longSlug) => longSlug.split("/")[2];
const edges2Dict = (edgesArr) => (
    mergeAll(
        map(
            (obj) => objOf(getSlug(obj.node.fields.slug), obj.node),
            edgesArr
        )
    )
);

const Excerpt = ({page, children, className}) => (
    <article
        className={className}
    >
        <header className={classNames("has-ui-font")}>
            <div className={classNames("has-body-font")}>
                <Link
                    to={page.fields.slug}
                    rel="bookmark"
                    className=""
                >
                    {page.frontmatter.title}
                </Link>
            </div>
        </header>
        {page.frontmatter.thumbnail && (
            <figure className={classNames("full-bleed")}>
                <a
                    href={page.fields.slug}
                    className=""
                    aria-hidden="true"
                    tabIndex="-1"
                >
                    <img
                        width="224"
                        height="150"
                        src={page.frontmatter.thumbnail.publicURL}
                        className=""
                        alt=""
                    />
                </a>
            </figure>
        )}
        <div className="">
            <p className="has-small-font-size">{children}</p>
        </div>
        {/* <footer className={classNames("has-ui-font")}>
            <div className="">
                <Link
                    to={page.fields.slug}
                    className={classNames(
                        "button-link__link"
                    )}
                    rel="bookmark"
                >
                    Open{" "}
                    <VisuallyHidden>{page.frontmatter.title}</VisuallyHidden>
                    <Icons.ChevronRight />
                </Link>
            </div>
        </footer> */}
    </article>
);

export default function Page() {
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
    return (
        <Layout entryHeader={<h1>Libraries</h1>}>
            <SEO
                title="Libraries"
                postSEO
            />
            <section className={styles.section}>
                <header className={styles.sectionHeader}>
                    <h2>MLIS portfolio</h2>
                    <p>
                        I graduated with a master of library science degree from
                        the University of South Carolina with a focus on
                        academic and digital libraries. These pages include
                        samples of my work accomplished during that time.
                    </p>
                </header>

                <h3 className={styles.divider}>Academic libraries</h3>
                <Excerpt
                    page={pages["academic-library-student-support"]}
                    className={styles.excerpt}
                >
                    Here, I walk through a hypothetical student project and
                    explain how I, as an academic librarian, would assist
                    throughout the process.
                </Excerpt>
                <Excerpt
                    page={pages["open-access-presentation"]}
                    className={styles.excerpt}
                >
                    These are the slides and notes from a presentation I did on
                    the state of open access in academic libraries.
                </Excerpt>
                <Excerpt
                    page={pages["academic-library-faculty-support"]}
                    className={styles.excerpt}
                >
                    I describe several key topics affecting academic libraries
                    and how I could assist faculty with them: data management
                    plans, open access, and intellectual property policy.
                </Excerpt>
                <Excerpt
                    page={pages["data-management-plan-evolving-pronouns"]}
                    className={styles.excerpt}
                >
                    In conjunction with my student support project, this is an
                    example data management plan I created.
                </Excerpt>

                <h3 className={styles.divider}>Technical services</h3>
                <Excerpt
                    page={pages["ex-libris-opac-analysis"]}
                    className={styles.excerpt}
                >
                    I explain the pros and cons of using the Ex Libris OPAC
                    for an academic library.
                </Excerpt>
                <Excerpt
                    page={pages["collection-development-policy"]}
                    className={styles.excerpt}
                >
                    I worked with a team to create this original collection
                    development policy a fictional library and critiqued three
                    existing policies.
                </Excerpt>
                <Excerpt
                    page={pages["selection-policy-materials"]}
                    className={styles.excerpt}
                >
                    I selected books with funds donated to a fictional
                    university library. To aid selection, I compared policies
                    from similar, real-world, institutions.
                </Excerpt>

                <h3 className={styles.divider}>Research</h3>
                <Excerpt
                    page={pages["library-twitter-r-presentation"]}
                    className={styles.excerpt}
                >
                    These are the slides and notes from a presentation I did
                    on using language analysis of Twitter accounts with the R
                    programming language.
                </Excerpt>
                <Excerpt
                    page={pages["researching-hispanic-children-books"]}
                    className={styles.excerpt}
                >
                    I worked with a team that researched the distribution of
                    Hispanic and Latino children's books in various US
                    libraries, and we compared our findings with population
                    statistics.
                </Excerpt>
                <Excerpt
                    page={pages["environmental-analysis"]}
                    className={styles.excerpt}
                >
                    I wrote this analysis of the community surrounding the
                    Chattahoochee Valley Libraries in Columbus, GA.
                </Excerpt>
            </section>
            <section className={styles.section}>
                <header className={styles.sectionHeader}>
                    <h2>Public library work</h2>
                    <p>
                        In addition to my academic career, I've worked in a
                        public library for several years. These are a few of the
                        projects I've worked on during that time.
                    </p>
                </header>
                <Excerpt
                    page={pages["how-play-chess"]}
                    className={styles.excerpt}
                >
                    I've run a succesful chess program since 2017. At the time,
                    I couldn't find any satisfactory guides to give to
                    participants. This is one that I wrote myself which aims to
                    cover all of the necessary knowledge without being too long
                    or too short.
                </Excerpt>
            </section>
        </Layout>
    );
}
