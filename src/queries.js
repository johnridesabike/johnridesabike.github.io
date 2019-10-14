import {useStaticQuery, graphql} from "gatsby";
export const useSiteMetadata = () => useStaticQuery(graphql`
query SiteMetadata {
    site {
        siteMetadata {
            title
            description
            author
        }
    }
}
`)