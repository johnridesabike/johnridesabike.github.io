%%raw(`import { graphql } from "gatsby"`)

%graphql(
  `
  query SiteMetadata @ppxConfig(inline:true, extend: "Gatsby.ExtendQuery") {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
  `
)

let useQuery: unit => t = () => query->useStaticQuery->parse
