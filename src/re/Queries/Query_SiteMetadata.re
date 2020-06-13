[%graphql
  {|{
  site {
    siteMetadata {
      title
      description
      author
    }
  }
}|};
  {inline: true}
];

let useSiteMetaData: unit => t =
  () => query->Gatsby.useStaticQueryUnsafe->parse;
