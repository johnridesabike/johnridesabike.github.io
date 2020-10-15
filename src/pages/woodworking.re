%raw
"import { graphql } from 'gatsby'";

module PageExcerpt = QueryFragments.PageExcerpt;

[%graphql
  {|
query WoodworkingPages @ppxConfig(extend: "Gatsby.ExtendQuery")  {
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
      ->WoodworkingPages.useStaticQuery
      ->WoodworkingPages.parse;
    <section className={"index__section"}>
      <header className={"index__sectionHeader"}>
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
      <h2 className={"index__divider"}> "Guides"->React.string </h2>
      {Excerpt.fromQuery(~size=`Wide, query.marbleTable)}
      {Excerpt.fromQuery(~size=`Wide, query.standingDesk)}
    </section>;
  };
};

[@react.component]
let make = () =>
  <Layout>
    <Seo title={`Str("Woodworking")} description=`Site />
    <main id="main" className="site-main page-content"> <ExcerptList /> </main>
  </Layout>;

let default = make;
