import React from "react";
import classnames from "classnames";
import Layout from "./layout";
import SEO from "./seo";
import PostedOn from "./posted-on";
import PostedBy from "./posted-by";
import style from "./page.module.css";

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
    const path = (
        (pageContext.slug)
        ? pageContext.slug
        : location.pathname
    );
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
                    className={classnames(
                        "has-ui-font",
                        style.header,
                        {[`${style.hasThumbnail}`]: thumbnail}
                    )}
                >
                    {thumbnail && (
                        <figure
                            className={classnames(
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
                                    className={style.coverFigureCaption}>
                                    {caption}
                                </figcaption>
                            )}
                        </figure>
                    )}
                    <div className={style.headerWrap}>
                        <h1
                            className={classnames(
                                "has-body-font",
                                style.title
                            )}
                        >
                            {title}
                        </h1>
                        <div className={style.meta}>
                            <div className={style.metaWrapper}>
                                {author &&
                                    <PostedBy author={author} />
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
                        <div className={classnames(
                            style.postTime,
                            style.footerItem
                        )}>
                            <time dateTime={ISOUpdated}>
                                Updated on {updated || date}
                            </time>
                            {/* <div className="entry-footer-wrapper entry-footer__item">
                            <div className="post-taxonomy entry-footer__item">
                                {% import "partials/entry-meta.njk" as entryMeta %}
                                {{ entryMeta.tags(tags) }}
                            </div><!--.post-taxonomy-->
                        </div><!-- .entry-footer-wrapper --> */}
                        </div>
                    </footer>
                </article>
            </main>
        </Layout>
    );
}
