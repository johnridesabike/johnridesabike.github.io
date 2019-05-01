import React from "react";
import {Link} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import john2018 from "../images/john2018.jpg";
import {useAllPages} from "../hooks";
import Excerpt from "../components/excerpt";
import {
    MailIcon,
    LibraryIcon,
    SoftwareIcon,
    ToolIcon
} from "../components/icons";

function IndexPage() {
    let allPages = useAllPages();
    allPages = allPages.filter((p) => p.node.fields !== null);
    const woodworking = allPages.filter(
        (p) => p.node.fields.category === "woodworking"
    );
    const libraries = allPages.filter(
        (p) => p.node.fields.category === "libraries"
    );
    return (
        <Layout>
            <div id="primary" className="content-area single">
                <main id="main" className="site-main post">
                    <div className="entry-content">
                        <SEO
                            title="Home"
                            keywords={["librarian", "software", "woodworking"]}
                        />
                        {/* <h1>Hi people</h1>
                        <p>Welcome to your new Gatsby site.</p>
                        <p>Now go build something great.</p>
                        <div
                            style={{
                                maxWidth: "300px",
                                marginBottom: "1.45rem"
                            }}
                        >
                            <Image />
                        </div>
                        <Link to="/page-2/">Go to page 2</Link> */}
                        <div
                            className="wp-block-columns has-2-columns"
                            style={{textAlign: "center"}}
                        >
                            <div className="wp-block-column">
                                <img
                                    src={john2018}
                                    alt="Portrait of John"
                                    height="256"
                                    width="256"
                                />
                            </div>
                            <div
                                className="wp-block-column"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <p className="has-large-font-size">
                                    Hi, I'm John Jackson.
                                </p>
                            </div>
                        </div>
                        <p>
                            I’m a public library staffer who is interested in
                            digital library technologies, web development, and
                            libraries of all types. I like to bike, write,
                            build, and tinker.
                        </p>
                        <div className="wp-block-columns has-2-columns">
                            <div className="wp-block-column">
                                <p style={{textAlign: "center"}}>
                                    <strong>
                                        Hiring? Here’s a bit about me:
                                    </strong>
                                </p>
                                <p>
                                    <span role="img" aria-label="check">
                                        ✔️
                                    </span>{" "}
                                    MLIS Graduate.
                                </p>
                                <p>
                                    <span role="img" aria-label="check">
                                        ✔️
                                    </span>{" "}
                                    Working in libraries since 2015.
                                </p>
                                <p>
                                    <span role="img" aria-label="check">
                                        ✔️
                                    </span>{" "}
                                    Experience in adult services programming,
                                    web development, data management, customer
                                    service, and more.
                                </p>
                                <div className="wp-block-button aligncenter is-style-squared">
                                    <Link
                                        className="wp-block-button__link"
                                        to="/resume/"
                                    >
                                        View my full résumé
                                    </Link>
                                </div>
                            </div>
                            <div className="wp-block-column">
                                <p style={{textAlign: "center"}}>
                                    <strong>Let’s get in touch.</strong>
                                </p>
                                <p>
                                    Questions, comments, job offers, jokes,
                                    poems, or just to say “hi.”{" "}
                                </p>
                                <div className="wp-block-button aligncenter is-style-squared">
                                    <a
                                        className="wp-block-button__link"
                                        href="mailto:jbpjackson@icloud.com"
                                    >
                                        <MailIcon /> Email me
                                    </a>
                                </div>
                            </div>
                        </div>

                        <hr className="wp-block-separator is-style-wide" />

                        <div className="wp-block-columns alignwide has-2-columns">
                            <div className="wp-block-column">
                                <LibraryIcon
                                    style={{
                                        display: "block",
                                        margin: "auto"
                                    }}
                                    className="has-header-color"
                                />
                                <h3>Libraries</h3>
                                <p>
                                    Some of the projects I’ve completed while
                                    working at a library and while completing my
                                    MLIS.
                                </p>
                            </div>
                            <div className="wp-block-column">
                                {libraries.map((edge) => (
                                    <Excerpt
                                        node={edge.node}
                                        key={edge.node.fields.slug}
                                    />
                                ))}
                            </div>
                        </div>

                        <hr className="wp-block-separator is-style-wide" />

                        <div className="wp-block-columns alignwide has-2-columns">
                            <div className="wp-block-column">
                                {libraries.map((edge) => (
                                    <Excerpt
                                        node={edge.node}
                                        key={edge.node.fields.slug}
                                    />
                                ))}
                            </div>
                            <div className="wp-block-column">
                                <SoftwareIcon
                                    style={{
                                        display: "block",
                                        margin: "auto"
                                    }}
                                    className="has-header-color"
                                />
                                <h3>Software</h3>
                                <p>
                                    These are various software projects I've
                                    worked on.
                                </p>
                            </div>
                        </div>

                        <hr className="wp-block-separator is-style-wide" />

                        <div className="wp-block-columns alignwide has-2-columns">
                            <div className="wp-block-column">
                                <ToolIcon
                                    style={{
                                        display: "block",
                                        margin: "auto"
                                    }}
                                    className="has-header-color"
                                />
                                <h3>Woodworking</h3>
                                <p>
                                    Guides for the woodworking projects I’ve
                                    done.
                                </p>
                            </div>
                            <div className="wp-block-column">
                                {woodworking.map((edge) => (
                                    <Excerpt
                                        node={edge.node}
                                        key={edge.node.fields.slug}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
}
export default IndexPage;
