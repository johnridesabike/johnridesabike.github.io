[%%raw "import { graphql } from 'gatsby'"];

let styles = Gatsby.loadCssModule("./index.module.css");

module PageExcerpt = Query.Fragment.PageExcerpt;

[%graphql
  {|
query SoftwarePages {
  coronate: markdownRemark(fields: {slug: {eq: "coronate"}}) {
    ...PageExcerpt
  }
  iosShortcuts: markdownRemark(fields: {slug: {eq: "ios-shortcuts"}}) {
    ...PageExcerpt
  }
  wordroom: markdownRemark(fields: {slug: {eq: "wordroom-a-pythonista-dictionary-app"}}) {
    ...PageExcerpt
  }
  johnridesabike: markdownRemark(fields: {slug: {eq: "johnridesa.bike"}}) {
    ...PageExcerpt
  }
  literacyAlliance: markdownRemark(fields: {slug: {eq: "literacy-alliance-wordpress"}}) {
    ...PageExcerpt
  }
  weracoba: markdownRemark(fields: {slug: {eq: "weracoba-wordpress-theme"}}) {
    ...PageExcerpt
  }
}|}
];

module ExcerptList = {
  [@react.component]
  let make = () => {
    let query =
      SoftwarePages.query->Gatsby.useStaticQueryUnsafe->SoftwarePages.parse;
    let mwmatching =
      switch (Query.useImages().mwmatching) {
      | Some({publicURL: Some(src)}) =>
        PageExcerpt.Thumbnail.Image({
          src,
          alt: "An undirected graph for matching.",
        })
      | _ => PageExcerpt.Thumbnail.Null
      };
    <section className=styles##section>
      <header className={styles##sectionHeader}>
        <h1>
          <Icons.Software height="1em" width="1em" />
          " Software projects"->React.string
        </h1>
        <p>
          {j|The sundry software projects I've dabbled in over the
              years. I do mostly coding and web design.|j}
          ->React.string
        </p>
      </header>
      <h2 className={styles##divider}> "Apps and coding"->React.string </h2>
      {Excerpt.fromQuery(~size=`Wide, query.coronate)}
      <Excerpt
        size=`Wide
        title={j|Maximum weighted matching finder|j}
        fullPath="https://johnridesa.bike/mwmatching-finder/"
        thumbnail=mwmatching
        linkType=`External>
        {j|While I was developing |j}->React.string
        <em> "Coronate"->React.string </em>
        {j| I needed to solve the problem of how to correctly pair chess players.
           Researching this problem led me to discover the world of graph
           theory and “maximum weighted matching.” To make these concepts easier
           for other people to learn, I put together this interactive webpage.|j}
        ->React.string
      </Excerpt>
      {Excerpt.fromQuery(~size=`Half, query.iosShortcuts)}
      {Excerpt.fromQuery(~size=`Half, query.wordroom)}
      <h2 className={styles##divider}> "Web development"->React.string </h2>
      {Excerpt.fromQuery(~size=`Wide, query.johnridesabike)}
      {Excerpt.fromQuery(~size=`Half, query.literacyAlliance)}
      {Excerpt.fromQuery(~size=`Half, query.weracoba)}
    </section>;
  };
};

[@react.component]
let make = () =>
  <Layout>
    <Seo title="Software" description=`Site />
    <main id="main" className="site-main page-content"> <ExcerptList /> </main>
  </Layout>;

let default = make;
