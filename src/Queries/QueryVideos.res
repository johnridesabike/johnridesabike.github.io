%%raw(`import { graphql } from "gatsby"`)

%graphql(
  `
  query Videos @ppxConfig(inline: true, extend: "Gatsby.ExtendQuery") {
    montageMp4: file(relativePath: {eq: "montage_web.mp4"}) {
      publicURL
    }
    montageWebm: file(relativePath: {eq: "montage_web.webm"}) {
      publicURL
    }
  }
  `
)

let useQuery = () => query->useStaticQuery->parse
