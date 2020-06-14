let styles = Gatsby.loadCssModule("./Page_Index.module.css");

let mwmatching = Gatsby.loadImage("../../images/mwmatching.svg");

[%graphql
  {|
query SoftwarePages {
  allMarkdownRemark(filter: {fields: {parentDir: {eq: "software"}}}) {
    ...Query_Frag_PageList.PageList
  }
}|}
];

let _ = SoftwarePages.makeDefaultVariables;
let _ = SoftwarePages.Z__INTERNAL.graphql_module;

module ExcerptList = {
  [@react.component]
  let make = () => {
    let query =
      SoftwarePages.query->Gatsby.useStaticQueryUnsafe->SoftwarePages.parse;
    let pages = Queries.ToProps.dictOfEdges(query.allMarkdownRemark.edges);
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
      {Queries.ToProps.propsOfDict(
         pages, "coronate", (. {fullPath, thumbnail, title}) =>
         <Excerpt fullPath thumbnail title isWide=true>
           {j|I created my own Swiss chess tournament manager with
                ReasonReact. It's free and open source for anyone to use, but
                especially designed for the needs of libraries and small clubs.|j}
           ->React.string
         </Excerpt>
       )}
      <Excerpt
        isWide=true
        title={j|Maximum weighted matching finder|j}
        fullPath="https://johnridesa.bike/mwmatching-finder/"
        thumbnail={Image({src: mwmatching})}
        isExternal=true>
        {j|While I was developing |j}->React.string
        <em> "Coronate"->React.string </em>
        {j| I needed to solve the problem of how to correctly pair chess players.
           Researching this problem led me to discover the world of graph
           theory and “maximum weighted matching.” To make these concepts easier
           for other people to learn, I put together this interactive webpage.|j}
        ->React.string
      </Excerpt>
      {Queries.ToProps.propsOfDict(
         pages, "ios-shortcuts", (. {fullPath, thumbnail, title}) =>
         <Excerpt fullPath thumbnail title isWide=false>
           {j|These are a few iOS shortcut scripts that I've made.|j}
           ->React.string
         </Excerpt>
       )}
      {Queries.ToProps.propsOfDict(
         pages,
         "wordroom-a-pythonista-dictionary-app",
         (. {fullPath, thumbnail, title}) =>
         <Excerpt fullPath thumbnail title isWide=false>
           {j|This is an iOS dictionary "app" built with Pythonista. It saves
                 the words you look up and your notes on them.|j}
           ->React.string
         </Excerpt>
       )}
      <h2 className={styles##divider}> "Web development"->React.string </h2>
      {Queries.ToProps.propsOfDict(
         pages, "johnridesa.bike", (. {fullPath, thumbnail, title}) =>
         <Excerpt fullPath thumbnail title isWide=true>
           {j|This page explains what technology I use to maintain this
                website, as well as how I solved a few problems along the way.
                It may be of interest to similarly-minded web developers.|j}
           ->React.string
         </Excerpt>
       )}
      {Queries.ToProps.propsOfDict(
         pages,
         "literacy-alliance-wordpress",
         (. {fullPath, thumbnail, title}) =>
         <Excerpt fullPath thumbnail title isWide=false>
           {j|In 2017, I redesigned a website for the local nonprofit Literacy
                 Alliance using WordPress and SquareSpace.|j}
           ->React.string
         </Excerpt>
       )}
      {Queries.ToProps.propsOfDict(
         pages, "weracoba-wordpress-theme", (. {fullPath, thumbnail, title}) =>
         <Excerpt fullPath thumbnail title isWide=false>
           {j| (Currently defunct.) This is a custom WordPress theme I created
                 from scratch. I don't update it anymore since I stopped using
                 WordPress for this site.|j}
           ->React.string
         </Excerpt>
       )}
    </section>;
  };
};

[@react.component]
let make = () =>
  <Layout>
    <Seo title="Software" />
    <main id="main" className="site-main page-content"> <ExcerptList /> </main>
  </Layout>;
