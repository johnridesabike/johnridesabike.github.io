[%graphql
  {|
query LibraryPages {
  allMarkdownRemark(filter: {fields: {parentDir: {eq: "libraries"}}}) {
    ...Query_Frag_PageList.PageList
  }
}|}
];

let useLibraryPages: unit => LibraryPages.t =
  () => LibraryPages.query->Gatsby.useStaticQueryUnsafe->LibraryPages.parse;
