import Icons from "./icons";
import {Link} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import VisuallyHidden from "@reach/visually-hidden";
import classNames from "classnames";
import {omit} from "ramda";
import styles from "./excerpt.module.css";

function SpecialLink(props) {
    return (props.isExternal)
        ? (
            <a
                rel="external"
                href={props.to}
                {...omit(["isExternal", "to"], props)}
            >
                {props.children}
            </a>
        ) : (
            <Link {...omit(["isExternal"], props)}>
                {props.children}
            </Link>
        );
}
SpecialLink.propTypes = {
    children: PropTypes.node,
    isExternal: PropTypes.bool,
    to: PropTypes.string
};

const Excerpt = ({
    isExternal,
    isWide,
    slug,
    title,
    thumbnailURL,
    children,
    className
}) => (
    <article
        className={classNames(
            styles.excerpt,
            className,
            {[`${styles.isWide}`]: isWide}
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
                <SpecialLink to={slug} rel="bookmark" isExternal={isExternal}>
                    {title}{" "}
                    {(isExternal) && <Icons.ExternalLink/>}
                </SpecialLink>
            </h3>
        </header>
        <div className={styles.content}>
            {thumbnailURL && (
                <figure
                    className={classNames(
                        "full-bleed-small",
                        styles.coverFigure
                    )}
                >
                    <SpecialLink
                        to={slug}
                        className={styles.coverLink}
                        aria-hidden="true"
                        tabIndex="-1"
                        isExternal={isExternal}
                    >
                        <img
                            width="128"
                            height="96"
                            src={thumbnailURL}
                            className={styles.coverImg}
                            alt=""
                        />
                    </SpecialLink>
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
                <SpecialLink
                    to={slug}
                    className={classNames(
                        "button-link__link"
                    )}
                    rel="bookmark"
                    isExternal={isExternal}
                >
                    Open {title}
                </SpecialLink>
            </VisuallyHidden>
        </div>
    </article>
);
Excerpt.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isExternal: PropTypes.bool,
    isWide: PropTypes.bool,
    slug: PropTypes.string,
    thumbnailURL: PropTypes.string,
    title: PropTypes.string
};
export default Excerpt;
