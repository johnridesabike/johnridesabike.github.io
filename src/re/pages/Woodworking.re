let styles = Gatsby.loadCssModule("./index.module.css");

module ExcerptList = {
  [@react.component]
  let make = () => {
    let query = Queries.useWoodworkingPages();
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
         ({fullPath, thumbnailURL, title}) =>
         <Excerpt fullPath ?thumbnailURL title isWide=false>
           {j|I made a custom end-table with an old marble chessboard and some
                two-by-fours. This guide covers how it was done, and some tips
                for building your own.|j}
           ->React.string
         </Excerpt>
       )}
      {Queries.ToProps.propsOfDict(
         pages,
         "standing-desk-converter-diy",
         ({fullPath, thumbnailURL, title}) =>
         <Excerpt fullPath ?thumbnailURL title isWide=false>
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
    <main id="main" className="site-mainn page-content">
      <ExcerptList />
    </main>
  </Layout>;
