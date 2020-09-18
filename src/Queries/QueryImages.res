%%raw(`import { graphql } from "gatsby"`)

open QueryFragments

%graphql(
  `
  query Images @ppxConfig(inline: true, extend: "Gatsby.ExtendQuery") {
    john2018: file(relativePath: {eq: "john2018.jpg"}) {
      sharpImg: childImageSharp {
        large: fixed(height: 256, width: 256){
          ...ImageFixed
        }
        small: fixed(height: 150, width: 150) {
          ...ImageFixed
        }
      }
    }
    mwmatching: file(relativePath: {eq: "mwmatching.svg"}) {
      publicURL
    }
  }
  `
)

let useQuery: unit => t = () => query->useStaticQuery->parse
