import React from "react";
import {graphql} from "gatsby";
import classnames from "classnames";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostedOn from "../components/posted-on";
import PostedBy from "../components/posted-by";
import style from "./pageTemplate.module.css";

export default function Template({
    pageContext,
    data // this prop will be injected by the GraphQL query below.
}) {
    const {slug} = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    return (
        <Layout
            entryHeader={
                <div
                    className={classnames(
                        "has-ui-font",
                        style.header,
                        {[`${style.hasThumbnail}`]: post.thumbnail}
                    )}
                >
                    {post.thumbnail && (
                        <figure
                            className={classnames(
                                "full-bleed",
                                style.coverFigure
                            )}
                        >
                            <img
                                src={post.thumbnail.publicURL}
                                className={style.coverImg}
                                alt={post.caption}
                            />
                            {post.caption && (
                                <figcaption
                                    className={style.coverFigureCaption}>
                                    {post.caption}
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
                            {post.title}
                        </h1>
                        <div className={style.meta}>
                            <div className={style.metaWrapper}>
                                {post.author &&
                                    <PostedBy author={post.author} />
                                }
                                {post.date &&
                                    <PostedOn
                                        date={post.date}
                                        ISODate={post.ISODate}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        >
            <SEO
                postPath={slug}
                postNode={postNode}
                title={post.title}
                postSEO
            />
            <main id="main" className="site-main">
                <article className="post">
                    <div
                        className={style.content}
                        dangerouslySetInnerHTML={{
                            __html: postNode.html
                        }}
                    />
                    {post.attachments && (
                        <div
                            id="attachments"
                            className="attachments has-ui-font"
                        >
                            <h3>Downloads</h3>
                            {post.attachments.map((file) => (
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
                            <time dateTime={post.ISOUpdated}>
                                Updated on {post.updated || post.date}
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

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            timeToRead
            excerpt
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                ISODate: date
                title
                category
                author
                updated(formatString: "MMM DD, YYYY")
                ISOUpdated: updated
                thumbnail {
                    publicURL
                }
                class
                attachments {
                    publicURL
                    name
                    extension
                }
            }
            fields {
                slug
                date
            }
        }
    }
`;
