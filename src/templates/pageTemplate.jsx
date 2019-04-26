import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const {markdownRemark} = data; // data.markdownRemark holds our post data
    const {frontmatter, html} = markdownRemark;
    return (
        <Layout>
            <SEO
                title={frontmatter.title}
                keywords={["gatsby", "application", "react"]} />
            {/* <div id="primary" className="content-area single">
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div> */}
            <div id="primary" className="content-area single">
                <main id="main" className="site-main">
                    <article className="post">
                        <div className="post-content">
                            <div
                                className="entry-content"
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                            {frontmatter.attachments &&
                            <div
                                id="attachments"
                                className="attachments has-ui-font">
                                <h3>Downloads</h3>
                                {frontmatter.attachments.map((file) =>
                                    <div
                                        key={file.publicURL}
                                        className="wp-block-file">
                                        <a href={file.publicURL}>
                                            {file.name}
                                        </a>&nbsp;
                                        <a
                                            href={file.publicURL}
                                            className="wp-block-file__button"
                                            download>
                                        Download
                                        </a>
                                    </div>
                                )}
                            </div>
                            }
                        </div>
                        <footer
                            className={`entry-footer entry-footer__single
 has-ui-font`}>
                            <div className="post-time entry-footer__item">
                                <span className="updated-on">
                                    <time
                                        className={`updated updated-date
 published`}
                                        dateTime={frontmatter.ISODate}>
                                    Updated on
                                        {" "}
                                        {frontmatter.date}
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
query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            ISODate: date
            path
            title
            attachments {
                publicURL
                name
            }
        }
    }
  }
`;