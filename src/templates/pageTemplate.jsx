import React from "react";
import {graphql} from "gatsby";

import Page from "../components/page";

export default function Template({pageContext, data, location}) {
    const postNode = data.markdownRemark;
    return (
        <Page
            location={location}
            pageContext={{...postNode, pageContext}}
        >
            {postNode.html}
        </Page>
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
                caption
                updated(formatString: "MMM DD, YYYY")
                ISOUpdated: updated
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
