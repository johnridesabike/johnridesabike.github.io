import {make as Layout} from "../components/Layout.bs"
import {Libraries} from "./libraries";
import {Link} from "gatsby";
import React from "react";
import {make as SEO} from "../components/Seo.bs";
import {Software} from "./software";
import {Woodworking} from "./woodworking";
import classNames from "classnames";
import john2018 from "../images/john2018.jpg";
import styles from "./index.module.css";
import * as Icons from "../components/icons";

function IndexPage() {
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={["librarian", "software", "woodworking"]}
            />
            <main id="main" className="site-main page-content">
                <div className={styles.topColumns}>
                    <figure>
                        <img
                            src={john2018}
                            alt="Portrait of John"
                            height="256"
                            width="256"
                            className="avatar"
                        />
                    </figure>
                    <p
                        className={classNames(
                            styles.hi,
                            "has-large-font-size"
                        )}
                    >
                        Hi, I'm John Jackson.
                    </p>
                </div>
                <p>
                    I’m a public library staffer who is interested in
                    digital library technologies, web development, and
                    libraries of all types. I like to bike, write,
                    build, and tinker.
                </p>
                <div className={styles.topColumns}>
                    <div>
                        <p>
                            <strong>
                                    Hiring? Here’s a bit about me:
                            </strong>
                        </p>
                        <p style={{textAlign: "left"}}>
                            <span role="img" aria-label="check">
                                    ✔️
                            </span>{" "}
                                MLIS Graduate.
                        </p>
                        <p style={{textAlign: "left"}}>
                            <span role="img" aria-label="check">
                                    ✔️
                            </span>{" "}
                                Working in libraries since 2015.
                        </p>
                        <p style={{textAlign: "left"}}>
                            <span role="img" aria-label="check">
                                    ✔️
                            </span>{" "}
                            Experience in adult services programming,
                            web development, data management, customer
                            service, and more.
                        </p>
                        <div
                            className={classNames(
                                "wp-block-button",
                                "aligncenter",
                                "is-style-squared"
                            )}
                        >
                            <Link
                                className="wp-block-button__link"
                                to="/resume/"
                            >
                                    View my full résumé
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p>
                            <strong>Let’s get in touch.</strong>
                        </p>
                        <p style={{textAlign: "left"}}>
                            Questions, comments, job offers, jokes,
                            poems, or just to say “hi.”{" "}
                        </p>
                        <div
                            className={classNames(
                                "wp-block-button",
                                "aligncenter",
                                "is-style-squared"
                            )}
                        >
                            <a
                                className="wp-block-button__link"
                                href="mailto:jbpjackson@icloud.com"
                            >
                                <Icons.Mail /> Email me
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <Libraries />
                <hr />
                <Software />
                <hr />
                <Woodworking />
            </main>
        </Layout>
    );
}
export default IndexPage;
