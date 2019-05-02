import React from "react";
import {Link} from "gatsby";
import {ChevronRightIcon} from "../components/icons";
import PostedOn from "./posted-on";
import styles from "./excerpt.module.css";

export const Excerpt = ({node}) => (
    <article
        className={
            "excerpt-entry post " + styles.excerpt +
            (node.frontmatter.thumbnail ? " has-post-thumbnail" : "")
        }
    >
        {/*{% if page.data.thumbnail %} has-post-thumbnail{% endif %}*/}
        <header className="entry-header has-ui-font" style={{display: "block"}}>
            {/* <div className="tab-head">
                <TagIcon />
                &nbsp;
                {node.fields.category}
            </div> */}
            <h2 className="entry-title has-body-font">
                <a
                    href={node.fields.slug}
                    rel="bookmark"
                    className="entry-title__link"
                >
                    {node.frontmatter.title}
                </a>
            </h2>
        </header>
        {node.frontmatter.thumbnail && (
            <figure className="featured-image featured-image__archive full-bleed">
                <a
                    href={node.fields.slug}
                    className="featured-image__link"
                    aria-hidden="true"
                    tabIndex="-1"
                >
                    <img
                        width="224"
                        height="150"
                        src={node.frontmatter.thumbnail.publicURL}
                        className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                        alt=""
                    />
                </a>
            </figure>
        )}

        <div className="entry-content">
            <p className="has-small-font-size">{node.excerpt}</p>
        </div>
        <footer className="entry-footer has-ui-font">
            <div className="entry-meta">
                <PostedOn
                    date={node.frontmatter.date}
                    ISODate={node.frontmatter.ISODate}
                />
            </div>
            <div className="continue-reading">
                <Link
                    to={node.fields.slug}
                    className="button-link__link button-open"
                    rel="bookmark"
                >
                    Open{" "}
                    <span className="screen-reader-text">
                        {node.frontmatter.title}
                    </span>
                    <ChevronRightIcon />
                </Link>
            </div>
        </footer>
    </article>
);

export default Excerpt;
