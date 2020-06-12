[%graphql
  {|
query SoftwarePages {
  allMarkdownRemark(filter: {fields: {parentDir: {eq: "software"}}}) {
    ...Query_Frag_PageList.PageList
  }
}|}
];

let useSoftwarePages: unit => SoftwarePages.t =
  () => SoftwarePages.query->Gatsby.useStaticQueryUnsafe->SoftwarePages.parse;
