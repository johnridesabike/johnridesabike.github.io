import { useStaticQuery, graphql } from "gatsby"

export const useImages = () => useStaticQuery(graphql`
  {
    file(relativePath: {eq: "john2018.jpg"}) {
      childImageSharp {
        fixed (height: 256, width: 256) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);
