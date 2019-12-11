import {graphql} from "gatsby";
import PageTemplate from "../re/templates/PageTemplate.bs";
export default PageTemplate;
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
