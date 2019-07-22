import React from "react";
import {Link} from "gatsby";
import classnames from "classnames";
import VisuallyHidden from "@reach/visually-hidden";
import PropTypes from "prop-types";
import Icons from "../icons";
import PostedOn from "../posted-on";
import styles from "./excerpt.module.css";

function Excerpt({node}) {
    const {frontmatter, fields, excerpt} = node;
    const {thumbnail, title, date, ISODate} = frontmatter;
    let {slug} = fields;
    return (
        <article
            className={classnames(
                styles.entry,
                {[`${styles.hasThumbnail}`]: thumbnail}
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
                        href={slug}
                        rel="bookmark"
                        className={styles.titleLink}
                    >
                        {title}
                    </a>
                </h2>
            </header>
            {thumbnail && (
                <figure
                    className={classnames("full-bleed", styles.coverFigure)}
                >
                    <a
                        href={slug}
                        className={styles.coverLink}
                        aria-hidden="true"
                        tabIndex="-1"
                    >
                        <img
                            width="224"
                            height="150"
                            src={thumbnail.publicURL}
                            className={styles.coverImg}
                            alt=""
                        />
                    </a>
                </figure>
            )}
            <div className={styles.content}>
                <p className="has-small-font-size">{excerpt}</p>
            </div>
            <footer className={classnames(styles.footer, "has-ui-font")}>
                <div className={styles.meta}>
                    <PostedOn
                        date={date}
                        ISODate={ISODate}
                        className={styles.metaItem}
                    />
                </div>
                <div className={styles.continueReading}>
                    <Link
                        to={slug}
                        className={classnames(
                            "button-link__link",
                            styles.continueReadingLink
                        )}
                        rel="bookmark"
                    >
                        Open{" "}
                        <VisuallyHidden>{title}</VisuallyHidden>
                        <Icons.ChevronRight />
                    </Link>
                </div>
            </footer>
        </article>
    );
}
Excerpt.propTypes = {
    node: PropTypes.shape({
        frontmatter: {
            title: PropTypes.string,
            date: PropTypes.string,
            ISODate: PropTypes.string,
            thumbnail: PropTypes.shape({publicURL: PropTypes.string})
        },
        fields: {slug: PropTypes.string},
        excerpt: PropTypes.string
    })
};

export default Excerpt;
