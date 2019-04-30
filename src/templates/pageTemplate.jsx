import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const EntryHeader = ({thumbnail, caption, title, author, date, classNames}) => (
    <div className={"entry-header has-ui-font " + classNames}>
        {thumbnail && (
            <figure className="featured-image featured-image__single full-bleed">
                <img
                    src={thumbnail.publicURL}
                    className="attachment-post-thumbnail size-post-thumbnail post-thumbnail__single wp-post-image"
                    alt={caption}
                />
                {caption && (
                    <figcaption className="featured-image__caption">
                        {caption}
                    </figcaption>
                )}
            </figure>
        )}
        <div className="entry-header-wrap">
            <h1 className="entry-title has-body-font">{title}</h1>
            <div className="entry-meta entry-meta__single">
                <div className="entry-meta-wrapper entry-meta-wrapper__single">
                    {/* // {% import "partials/entry-meta.njk" as entryMeta %} */}
                    {author}
                    {date}
                </div>
            </div>
        </div>
    </div>
);

export default function Template({
    pageContext,
    data // this prop will be injected by the GraphQL query below.
}) {
    const {slug} = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    console.log(post);
    return (
        <Layout
            entryHeader={
                <EntryHeader
                    thumbnail={post.thumbnail}
                    caption={post.caption}
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    classNames={post.class || "single"}
                />
            }
            thumbnail={post.thumbnail} // to trigger the thumbnail wrapper
            classNames={post.class || "single"}
        >
            <SEO
                postPath={slug}
                postNode={postNode}
                title={post.title}
                postSEO
            />
            <div id="primary" className="content-area single">
                <main id="main" className="site-main">
                    <article className="post">
                        <div className="post-content">
                            <div
                                className="entry-content"
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
                                                // eslint-disable-next-line max-len
                                                className="wp-block-file__button"
                                                download
                                            >
                                                Download
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <footer
                            // eslint-disable-next-line max-len
                            className="entry-footer entry-footer__single has-ui-font"
                        >
                            <div className="post-time entry-footer__item">
                                <span className="updated-on">
                                    <time
                                        // eslint-disable-next-line max-len
                                        className="updated updated-date published"
                                        dateTime={post.ISODate}
                                    >
                                        Updated on {post.date}
                                    </time>
                                </span>
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
            </div>
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
