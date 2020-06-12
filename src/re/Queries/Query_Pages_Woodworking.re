[%graphql
  {|
query WoodworkingPages {
  allMarkdownRemark(filter: {fields: {parentDir: {eq: "woodworking"}}}) {
    ...Query_Frag_PageList.PageList
  }
}|}
];

let useWoodworkingPages: unit => WoodworkingPages.t =
  () =>
    WoodworkingPages.query
    ->Gatsby.useStaticQueryUnsafe
    ->WoodworkingPages.parse;
