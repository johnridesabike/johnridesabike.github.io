import Layout from "./layout";
import PostedBy from "./posted-by";
import PostedOn from "./posted-on";
import PropTypes from "prop-types";
import React from "react";
import SEO from "./seo";
import classNames from "classnames";
import style from "./page.module.css";

// eslint-disable-next-line complexity
export default function Page({pageContext, children, location}) {
    const {
        caption,
        title,
        author,
        date,
        ISODate,
        updated,
        thumbnail,
        ISOUpdated,
        attachments
    } = pageContext.frontmatter;
    const path = (pageContext.slug) ? pageContext.slug : location.pathname;
    const content = (
        (typeof children === "string")
        ? (
            <div
                className="page-content"
                dangerouslySetInnerHTML={{__html: children}}
            />
        )
        : <div className="page-content">{children}</div>
    );
    return (
        <Layout
            entryHeader={
                <div
                    className={classNames(
                        "has-ui-font",
                        style.header,
                        {[`${style.hasThumbnail}`]: thumbnail}
                    )}
                >
                    {thumbnail && (
                        <figure
                            className={classNames(
                                "full-bleed",
                                style.coverFigure
                            )}
                        >
                            <img
                                src={thumbnail.publicURL}
                                className={style.coverImg}
                                alt={caption}
                            />
                            {caption && (
                                <figcaption
                                    className={classNames(
                                        style.coverFigureCaption,
                                        "has-xsmall-font-size"
                                    )}
                                >
                                    <span className={style.captionText}>
                                        {caption}
                                    </span>
                                </figcaption>
                            )}
                        </figure>
                    )}
                    <div className={style.headerWrap}>
                        <h1
                            className={classNames(
                                "has-title-font",
                                style.title
                            )}
                        >
                            {title}
                        </h1>
                        <div className={style.meta}>
                            <div className={style.metaWrapper}>
                                {author && <PostedBy author={author} />
                                }
                                {date &&
                                    <PostedOn
                                        date={date}
                                        ISODate={ISODate}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        >
            <SEO
                postPath={path}
                title={title}
                postSEO
            />
            <main id="main" className="site-main">
                <article>
                    {content}
                    {attachments && (
                        <div
                            id="attachments"
                            className="attachments has-ui-font"
                        >
                            <h3>Downloads</h3>
                            {attachments.map((file) => (
                                <div
                                    key={file.publicURL}
                                    className="wp-block-file"
                                >
                                    <a href={file.publicURL}>
                                        {file.name}.{file.extension}
                                    </a>
                                    &nbsp;
                                    <a
                                        href={file.publicURL}
                                        className="wp-block-file__button"
                                        download
                                    >
                                        Download
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                    <footer className={`${style.footer} has-ui-font`}>
                        <div
                            className={classNames(
                                style.postTime,
                                style.footerItem
                            )}
                        >
                            <time dateTime={ISOUpdated}>
                                Updated on {updated || date}
                            </time>
                        </div>
                    </footer>
                </article>
            </main>
        </Layout>
    );
}
Page.propTypes = {
    children: PropTypes.node,
    location: PropTypes.any,
    pageContext: PropTypes.any
};
