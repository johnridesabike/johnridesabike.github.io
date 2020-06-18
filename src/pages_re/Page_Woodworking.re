let styles = Gatsby.loadCssModule("./Page_Index.module.css");

[%graphql
  {|
query WoodworkingPages {
  allMarkdownRemark(filter: {fields: {parentDir: {eq: "woodworking"}}}) {
    ...Query_Frag_PageList.PageList
  }
}|}
];

let _ = WoodworkingPages.makeDefaultVariables;
let _ = WoodworkingPages.Z__INTERNAL.graphql_module;
let _ = WoodworkingPages.serializeVariables;

module ExcerptList = {
  [@react.component]
  let make = () => {
    let query =
      WoodworkingPages.query
      ->Gatsby.useStaticQueryUnsafe
      ->WoodworkingPages.parse;
    let pages = Queries.ToProps.dictOfEdges(query.allMarkdownRemark.edges);

    <section className={styles##section}>
      <header className={styles##sectionHeader}>
        <h1>
          <span role="img" ariaHidden=true> {j|🛠|j}->React.string </span>
          " Woodworking projects"->React.string
        </h1>
        <p>
          {j|Sometimes I build furniture, and these are the guides I wrote for
             them.|j}
          ->React.string
        </p>
      </header>
      <h2 className={styles##divider}> "Guides"->React.string </h2>
      {Queries.ToProps.propsOfDict(
         pages,
         "marble-top-chessboard-end-table",
         (. {fullPath, thumbnail, title}) =>
         <Excerpt fullPath thumbnail title isWide=false>
           {j|I made a custom end-table with an old marble chessboard and some
                two-by-fours. This guide covers how it was done, and some tips
                for building your own.|j}
           ->React.string
         </Excerpt>
       )}
      {Queries.ToProps.propsOfDict(
         pages,
         "standing-desk-converter-diy",
         (. {fullPath, thumbnail, title}) =>
         <Excerpt fullPath thumbnail title isWide=false>
           {j| I turned a old, regular desk into a fancy new standing desk.
                This covers how I did it, how you can make your own, and some
                general tips about standing desks.|j}
           ->React.string
         </Excerpt>
       )}
    </section>;
  };
};

[@react.component]
let make = () =>
  <Layout>
    <Seo title="Woodworking" />
    <main id="main" className="site-main page-content"> <ExcerptList /> </main>
  </Layout>;
