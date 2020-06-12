[%graphql
  {|
query SiteMetadata {
  site {
    siteMetadata {
      title
      description
      author
    }
  }
}|}
];

let useSiteMetaData: unit => SiteMetadata.t =
  () => SiteMetadata.query->Gatsby.useStaticQueryUnsafe->SiteMetadata.parse;
