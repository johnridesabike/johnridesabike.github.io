import { useStaticQuery, graphql } from "gatsby"

export const useImages = () => useStaticQuery(graphql`
{
  john2018: file(relativePath: {eq: "john2018.jpg"}) {
    sharpImg: childImageSharp {
      large: fixed(height: 256, width: 256) {
        src
        srcSet
        height
        width
      }
      small: fixed(height: 150, width: 150) {
        src
        srcSet
        height
        width
      }
    }
  }
}
`);
