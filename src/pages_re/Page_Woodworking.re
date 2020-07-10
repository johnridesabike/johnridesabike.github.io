[%%raw "import { graphql } from 'gatsby'"];

let styles = Gatsby.loadCssModule("./Page_Index.module.css");

module PageExcerpt = Query.Fragment.PageExcerpt;

[%graphql
  {|
query WoodworkingPages {
  marbleTable: markdownRemark(fields: {slug: {eq: "marble-top-chessboard-end-table"}}) {
    ...PageExcerpt
  }
  standingDesk: markdownRemark(fields: {slug: {eq: "standing-desk-converter-diy"}}) {
    ...PageExcerpt
  }
}|}
];

module ExcerptList = {
  [@react.component]
  let make = () => {
    let query =
      WoodworkingPages.query
      ->Gatsby.useStaticQueryUnsafe
      ->WoodworkingPages.parse;

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
      {Excerpt.fromQuery(~size=`Wide, query.marbleTable)}
      {Excerpt.fromQuery(~size=`Wide, query.standingDesk)}
    </section>;
  };
};

[@react.component]
let make = () =>
  <Layout>
    <Seo title="Woodworking" description=`Site />
    <main id="main" className="site-main page-content"> <ExcerptList /> </main>
  </Layout>;
