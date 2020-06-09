import {graphql} from "gatsby";
import {make} from "./re/Template_Page.bs.js";
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
        sharpImg: childImageSharp {
          mobileImage: fluid(maxWidth: 600) {
            srcSet
            src
            sizes
            aspectRatio
          }
          tabletImage: fluid(maxWidth: 1200) {
            srcSet
            src
            sizes
            aspectRatio
          }
          desktopImage: fluid(maxWidth: 600) {
            srcSet
            src
            sizes
            aspectRatio
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
