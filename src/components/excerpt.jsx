import React from "react";
import {Link} from "gatsby";
import classnames from "classnames";
import VisuallyHidden from "@reach/visually-hidden";
import Icons from "../components/icons";
import PostedOn from "./posted-on";
import styles from "./excerpt.module.css";

export const Excerpt = ({node}) => (
    <article
        className={classnames(
            styles.entry,
            {[`${styles.hasThumbnail}`]: node.frontmatter.thumbnail}
        )}
    >
        <header className={classnames(styles.header, "has-ui-font")}>
            {/* <div className="tab-head">
                <TagIcon />
                &nbsp;
                {node.fields.category}
            </div> */}
            <h2 className={classnames(styles.title, "has-body-font")}>
                <a
                    href={node.fields.slug}
                    rel="bookmark"
                    className={styles.titleLink}
                >
                    {node.frontmatter.title}
                </a>
            </h2>
        </header>
        {node.frontmatter.thumbnail && (
            <figure className={classnames("full-bleed", styles.coverFigure)}>
                <a
                    href={node.fields.slug}
                    className={styles.coverLink}
                    aria-hidden="true"
                    tabIndex="-1"
                >
                    <img
                        width="224"
                        height="150"
                        src={node.frontmatter.thumbnail.publicURL}
                        className={styles.coverImg}
                        alt=""
                    />
                </a>
            </figure>
        )}
        <div className={styles.content}>
            <p className="has-small-font-size">{node.excerpt}</p>
        </div>
        <footer className={classnames(styles.footer, "has-ui-font")}>
            <div className={styles.meta}>
                <PostedOn
                    date={node.frontmatter.date}
                    ISODate={node.frontmatter.ISODate}
                    classes={[styles.metaItem]}
                />
            </div>
            <div className={styles.continueReading}>
                <Link
                    to={node.fields.slug}
                    className={classnames(
                        "button-link__link",
                        styles.continueReadingLink
                    )}
                    rel="bookmark"
                >
                    Open{" "}
                    <VisuallyHidden>{node.frontmatter.title}</VisuallyHidden>
                    <Icons.ChevronRight />
                </Link>
            </div>
        </footer>
    </article>
);

export default Excerpt;
