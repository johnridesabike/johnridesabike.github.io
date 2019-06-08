import {Link} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import VisuallyHidden from "@reach/visually-hidden";
import classNames from "classnames";
import styles from "./excerpt.module.css";

const Excerpt = ({slug, title, thumbnail, children, className}) => (
    <article
        className={classNames(
            styles.excerpt,
            className,
            {[`${styles.hasThumbnail}`]: thumbnail !== null}
        )}
    >
        <header className="has-ui-font">
            <h3
                className={classNames(
                    "has-body-font",
                    "has-medium-font-size",
                    "has-no-text-transform",
                    styles.title
                )}
            >
                <Link
                    to={slug}
                    rel="bookmark"
                    className=""
                >
                    {title}
                </Link>
            </h3>
        </header>
        <div className={styles.content}>
            {thumbnail && (
                <figure
                    className={classNames(
                        "full-bleed",
                        styles.coverFigure
                    )}
                >
                    <a
                        href={slug}
                        className={styles.coverLink}
                        aria-hidden="true"
                        tabIndex="-1"
                    >
                        <img
                            width="128"
                            height="96"
                            src={thumbnail.publicURL}
                            className={styles.coverImg}
                            alt=""
                        />
                    </a>
                </figure>
            )}
            <p
                className={classNames(
                    "has-small-font-size",
                    styles.text
                )}
            >
                {children}
            </p>
            <VisuallyHidden>
                <Link
                    to={slug}
                    className={classNames(
                        "button-link__link"
                    )}
                    rel="bookmark"
                >
                    Open {title}
                </Link>
            </VisuallyHidden>
        </div>
    </article>
);
Excerpt.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    slug: PropTypes.string,
    thumbnail: PropTypes.object,
    title: PropTypes.string
};
export default Excerpt;
