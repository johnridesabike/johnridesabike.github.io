let styles = Gatsby.loadCssModule("./index.module.css");

module ExcerptList = {
  [@react.component]
  let make = () => {
    let query = Queries.useLibraryPages();
    let pages = Queries.ToProps.dictOfEdges(query);
    <React.Fragment>
      <section className={styles##section}>
        <header className={styles##sectionHeader}>
          <h1>
            <span role="img" ariaHidden=true> {j|🎓|j}->React.string </span>
            " MLIS portfolio"->React.string
          </h1>
          <p>
            {j|I graduated with a master of library science degree from
                the University of South Carolina with a focus on
                academic and digital libraries. These pages include
                samples of my work accomplished during that time.|j}
            ->React.string
          </p>
        </header>
        <h2 className={styles##divider}>
          "Academic libraries"->React.string
        </h2>
        {Queries.ToProps.(
           make(
             pages,
             "academic-library-student-support",
             ({slug, thumbnailURL, title}) =>
             <Excerpt slug thumbnailURL title isWide=false>
               {j|Here, I walk through a hypothetical student project and
                explain how I, as an academic librarian, would assist
                throughout the process.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           make(
             pages, "open-access-presentation", ({slug, thumbnailURL, title}) =>
             <Excerpt slug thumbnailURL title isWide=false>
               {j|These are the slides and notes from a presentation I did on
                the state of open access in academic libraries.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           make(
             pages,
             "academic-library-faculty-support",
             ({slug, thumbnailURL, title}) =>
             <Excerpt slug thumbnailURL title isWide=false>
               {j|I describe several key topics affecting academic libraries
                and how I could assist faculty with them: data management
                plans, open access, and intellectual property policy.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           make(
             pages,
             "data-management-plan-evolving-pronouns",
             ({slug, thumbnailURL, title}) =>
             <Excerpt slug thumbnailURL title isWide=false>
               {j|In conjunction with my student support project, this is an
                example data management plan I created.|j}
               ->React.string
             </Excerpt>
           )
         )}
        <h2 className={styles##divider}>
          "Technical services"->React.string
        </h2>
        {Queries.ToProps.(
           make(
             pages, "ex-libris-opac-analysis", ({slug, thumbnailURL, title}) =>
             <Excerpt slug thumbnailURL title isWide=false>
               {j|I explain the pros and cons of using the Ex Libris OPAC
                for an academic library.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           make(
             pages,
             "collection-development-policy",
             ({slug, thumbnailURL, title}) =>
             <Excerpt slug thumbnailURL title isWide=false>
               {j|I worked with a team to create this original collection
                development policy a fictional library and critiqued three
                existing policies.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           make(
             pages,
             "selection-policy-materials",
             ({slug, thumbnailURL, title}) =>
             <Excerpt slug thumbnailURL title isWide=true>
               {j|I selected books with funds donated to a fictional
                university library. To aid selection, I compared policies
                from similar, real-world, institutions.|j}
               ->React.string
             </Excerpt>
           )
         )}
        <h2 className={styles##divider}> "Research"->React.string </h2>
        {Queries.ToProps.(
           make(
             pages,
             "researching-hispanic-children-books",
             ({slug, thumbnailURL, title}) =>
             <Excerpt slug thumbnailURL title isWide=true>
               {j|I worked with a team that researched the distribution of
                Hispanic and Latino children's books in various US
                libraries.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           make(
             pages,
             "library-twitter-r-presentation",
             ({slug, thumbnailURL, title}) =>
             <Excerpt slug thumbnailURL title isWide=false>
               {j|These are the slides and notes from a presentation I did
                on using language analysis of Twitter accounts with the R
                programming language.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           make(
             pages, "environmental-analysis", ({slug, thumbnailURL, title}) =>
             <Excerpt slug thumbnailURL title isWide=false>
               {j|I wrote this analysis of the community surrounding the
                  Chattahoochee Valley Libraries in Columbus, GA.|j}
               ->React.string
             </Excerpt>
           )
         )}
      </section>
      <hr />
      <section className={styles##section}>
        <header className={styles##sectionHeader}>
          <h1> <Icons.Chess /> " Chess at the library."->React.string </h1>
          <p>
            {j|While working at a public library for the last few years,
              I've developed an all-ages chess program. These are a few
              resources I created to help facilitate it|j}
            ->React.string
          </p>
        </header>
        <h2 className={styles##divider}> "Chess articles"->React.string </h2>
        <Excerpt
          isWide=false
          title={j|Your Library’s First Chess Tournament: From Opening to Endgame|j}
          slug="http://programminglibrarian.org/articles/your-library’s-first-chess-tournament-opening-endgame"
          isExternal=true>
          "I've published a guide to running a library chess tournament on "
          ->React.string
          <em> "Programming Librarian"->React.string </em>
          {j|. It covers all of the basic
              knowledge such as scorekeeping and pairing, plus other tips that
              a library worker (or anyone directing a tournament) would need
              to know.|j}
          ->React.string
        </Excerpt>
        {Queries.ToProps.(
           make(pages, "how-play-chess", ({slug, thumbnailURL, title}) =>
             <Excerpt slug thumbnailURL title isWide=false>
               {j| I've run a succesful chess program since 2017. At the time,
                  I couldn't find any satisfactory guides to give to
                  participants. This is one that I wrote myself which aims to
                  cover all of the necessary knowledge without being too long
                  or too short.|j}
               ->React.string
             </Excerpt>
           )
         )}
      </section>
    </React.Fragment>;
  };
};

[@react.component]
let make = () =>
  <Layout>
    <Seo title="Libraries" />
    <main id="main" className="site-mainn page-content">
      <ExcerptList />
    </main>
  </Layout>;
let default = make;