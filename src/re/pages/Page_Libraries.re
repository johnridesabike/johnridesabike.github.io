let styles = Gatsby.loadCssModule("./Page_Index.module.css");

let montage =
  Queries.Video.{
    height: "90",
    width: "160",
    sources: [|
      {
        src: Gatsby.loadImage("../../video/montage_web.mp4"),
        type_: "video/mp4",
      },
      {
        src: Gatsby.loadImage("../../video/montage_web.webm"),
        type_: "video/webm",
      },
    |],
  };

[%graphql
  {|
query LibraryPages {
  allMarkdownRemark(filter: {fields: {parentDir: {eq: "libraries"}}}) {
    ...Query_Frag_PageList.PageList
  }
}|}
];

let _ = LibraryPages.makeDefaultVariables;
let _ = LibraryPages.Z__INTERNAL.graphql_module;

module ExcerptList = {
  [@react.component]
  let make = () => {
    let query =
      LibraryPages.query->Gatsby.useStaticQueryUnsafe->LibraryPages.parse;
    let pages = Queries.ToProps.dictOfEdges(query.allMarkdownRemark.edges);
    <React.Fragment>
      <section className={styles##section}>
        <header className={styles##sectionHeader}>
          <h1>
            <span role="img" ariaHidden=true> {j|📽|j}->React.string </span>
            " Media production"->React.string
          </h1>
        </header>
        <h2 className={styles##divider}> "Public libraries"->React.string </h2>
        {Queries.ToProps.(
           propsOfDict(pages, "library-media", (. {fullPath, title}) =>
             <Excerpt fullPath thumbnail={Video(montage)} title isWide=true>
               {j|I produced instructional videos for Chattahoochee Valley
                  Libraries. This was in part a response to the COVID-19 crisis.
                  These videos were a way to extend library services to patrons
                  while our doors were closed to the public.|j}
               ->React.string
             </Excerpt>
           )
         )}
      </section>
      <hr />
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
           propsOfDict(
             pages,
             "academic-library-student-support",
             (. {fullPath, thumbnail, title}) =>
             <Excerpt fullPath thumbnail title isWide=false>
               {j|Here, I walk through a hypothetical student project and
                  explain how I, as an academic librarian, would assist
                  throughout the process.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           propsOfDict(
             pages,
             "open-access-presentation",
             (. {fullPath, thumbnail, title}) =>
             <Excerpt fullPath thumbnail title isWide=false>
               {j|These are the slides and notes from a presentation I did on
                  the state of open access in academic libraries.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           propsOfDict(
             pages,
             "academic-library-faculty-support",
             (. {fullPath, thumbnail, title}) =>
             <Excerpt fullPath thumbnail title isWide=false>
               {j|I describe several key topics affecting academic libraries
                  and how I could assist faculty with them: data management
                  plans, open access, and intellectual property policy.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           propsOfDict(
             pages,
             "data-management-plan-evolving-pronouns",
             (. {fullPath, thumbnail, title}) =>
             <Excerpt fullPath thumbnail title isWide=false>
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
           propsOfDict(
             pages,
             "ex-libris-opac-analysis",
             (. {fullPath, thumbnail, title}) =>
             <Excerpt fullPath thumbnail title isWide=false>
               {j|I explain the pros and cons of using the Ex Libris OPAC
                for an academic library.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           propsOfDict(
             pages,
             "collection-development-policy",
             (. {fullPath, thumbnail, title}) =>
             <Excerpt fullPath thumbnail title isWide=false>
               {j|I worked with a team to create this original collection
                  development policy a fictional library and critiqued three
                  existing policies.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           propsOfDict(
             pages,
             "selection-policy-materials",
             (. {fullPath, thumbnail, title}) =>
             <Excerpt fullPath thumbnail title isWide=true>
               {j|I selected books with funds donated to a fictional
                  university library. To aid selection, I compared policies
                  from similar, real-world, institutions.|j}
               ->React.string
             </Excerpt>
           )
         )}
        <h2 className={styles##divider}> "Research"->React.string </h2>
        {Queries.ToProps.(
           propsOfDict(
             pages,
             "researching-hispanic-children-books",
             (. {fullPath, thumbnail, title}) =>
             <Excerpt fullPath thumbnail title isWide=true>
               {j|I worked with a team that researched the distribution of
                  Hispanic and Latino children's books in various US libraries.
                |j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           propsOfDict(
             pages,
             "library-twitter-r-presentation",
             (. {fullPath, thumbnail, title}) =>
             <Excerpt fullPath thumbnail title isWide=false>
               {j|These are the slides and notes from a presentation I did
                  on using language analysis of Twitter accounts with the R
                  programming language.|j}
               ->React.string
             </Excerpt>
           )
         )}
        {Queries.ToProps.(
           propsOfDict(
             pages,
             "environmental-analysis",
             (. {fullPath, thumbnail, title}) =>
             <Excerpt fullPath thumbnail title isWide=false>
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
          fullPath={j|http://programminglibrarian.org/articles/your-library’s-first-chess-tournament-opening-endgame|j}
          isExternal=true
          thumbnail=Null>
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
           propsOfDict(
             pages, "how-play-chess", (. {fullPath, thumbnail, title}) =>
             <Excerpt fullPath thumbnail title isWide=false>
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
    <main id="main" className="site-main page-content"> <ExcerptList /> </main>
  </Layout>;
