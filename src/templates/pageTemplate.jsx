import {graphql} from "gatsby";
import {make} from "../re/templates/PageTemplate.bs";
export default make;
export const pageQuery = graphql`
query PageByPath($path: String!) {
  markdownRemark(fields: {fullPath: {eq: $path}}) {
    html
    timeToRead
    excerpt
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      isoDate: date
      title
      author
      caption
      updated(formatString: "MMM DD, YYYY")
      isoUpdated: updated
      thumbnail {
        publicURL
        childImageSharp {
          fluid {
            srcSet
            src
          }
        }
      }
      attachments {
        publicURL
        name
        extension
      }
    }
    fields {
      slug
      fullPath
      parentDir
    }
  }
}
`;
