import { make as Page } from "../re/templates/PageTemplate.bs";
import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

export default function Template({ pageContext, data }) {
    const {frontmatter, html} = data.markdownRemark;
    const {
        title,
        thumbnail,
        caption,
        date,
        isoDate,
        author,
        attachments,
        updated,
        isoUpdated,
    } = frontmatter;
    return (
        <Page
            title={title}
            thumbnail={thumbnail}
            caption={caption}
            date={date}
            isoDate={isoDate}
            author={author}
            attachments={attachments}
            updated={updated}
            isoUpdated={isoUpdated}
            html={html} />
    );
}
Template.propTypes = {
    data: PropTypes.object,
    pageContext: PropTypes.any
};

export const pageQuery = graphql`
    query PageBySlug($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            timeToRead
            excerpt
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                isoDate: date
                title
                category
                author
                caption
                updated(formatString: "MMM DD, YYYY")
                isoUpdated: updated
                thumbnail {
                    publicURL
                }
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
