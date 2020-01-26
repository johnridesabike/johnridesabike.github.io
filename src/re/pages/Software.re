let styles = Gatsby.loadCssModule("./index.module.css");

module ExcerptList = {
  [@react.component]
  let make = () => {
    let query = Queries.useSoftwarePages();
    let pages = Queries.ToProps.dictOfEdges(query);
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
      {Queries.ToProps.(
         propsOfDict(pages, "coronate", ({slug, thumbnailURL, title}) =>
           <Excerpt slug thumbnailURL title isWide=true>
             {j|I created my own Swiss chess tournament manager with
                ReasonReact. It's free and open source for anyone to use, but
                especially designed for the needs of libraries and small clubs.|j}
             ->React.string
           </Excerpt>
         )
       )}
      {Queries.ToProps.(
         propsOfDict(pages, "ios-shortcuts", ({slug, thumbnailURL, title}) =>
           <Excerpt slug thumbnailURL title isWide=false>
             {j|These are a few iOS shortcut scripts that I've made.|j}
             ->React.string
           </Excerpt>
         )
       )}
      {Queries.ToProps.(
         propsOfDict(
           pages,
           "wordroom-a-pythonista-dictionary-app",
           ({slug, thumbnailURL, title}) =>
           <Excerpt slug thumbnailURL title isWide=false>
             {j|This is an iOS dictionary "app" built with Pythonista. It saves
                 the words you look up and your notes on them.|j}
             ->React.string
           </Excerpt>
         )
       )}
      <h2 className={styles##divider}> "Web development"->React.string </h2>
      {Queries.ToProps.(
         propsOfDict(pages, "johnridesa.bike", ({slug, thumbnailURL, title}) =>
           <Excerpt slug thumbnailURL title isWide=true>
             {j|This page explains what technology I use to maintain this
                website, as well as how I solved a few problems along the way.
                It may be of interest to similarly-minded web developers.|j}
             ->React.string
           </Excerpt>
         )
       )}
      {Queries.ToProps.(
         propsOfDict(
           pages,
           "literacy-alliance-wordpress",
           ({slug, thumbnailURL, title}) =>
           <Excerpt slug thumbnailURL title isWide=false>
             {j|In 2017, I redesigned a website for the local nonprofit Literacy
                 Alliance using WordPress and SquareSpace.|j}
             ->React.string
           </Excerpt>
         )
       )}
      {Queries.ToProps.(
         propsOfDict(
           pages, "weracoba-wordpress-theme", ({slug, thumbnailURL, title}) =>
           <Excerpt slug thumbnailURL title isWide=false>
             {j| (Currently defunct.) This is a custom WordPress theme I created
                 from scratch. I don't update it anymore since I stopped using
                 WordPress for this site.|j}
             ->React.string
           </Excerpt>
         )
       )}
    </section>;
  };
};

[@react.component]
let make = () =>
  <Layout>
    <Seo title="Software" />
    <main id="main" className="site-mainn page-content">
      <ExcerptList />
    </main>
  </Layout>;
let default = make;
