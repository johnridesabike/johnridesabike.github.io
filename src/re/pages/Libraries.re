open QueryTypes;
let styles = Gatsby.loadCssModule("./index.module.css");
let stylesExcerpt = Gatsby.loadCssModule("../excerpt.module.css");
let montageMp4 = Gatsby.loadImage("../../video/montage_web.mp4");
let montageWebm = Gatsby.loadImage("../../video/montage_web.webm");

module ExcerptList = {
  [@react.component]
  let make = () => {
    let query = Queries.useLibraryPages();
    let pages = Queries.ToProps.dictOfEdges(query.allMarkdownRemark.edges);
    <React.Fragment>
      <section className={styles##section}>
        <header className={styles##sectionHeader}>
          <h1>
            <span role="img" ariaHidden=true> {j|📽|j}->React.string </span>
            " Media"->React.string
          </h1>
        </header>
        {Queries.ToProps.(
           propsOfDict(pages, "library-media", (. {fullPath, title, _}) =>
             <article
               className={Cn.make([
                 stylesExcerpt##excerpt,
                 Cn.ifTrue(stylesExcerpt##isWide, true),
               ])}>
               <header className="has-ui-font">
                 <h3
                   className={Cn.make([
                     "has-body-font",
                     "has-medium-font-size",
                     "has-no-text-transform",
                     stylesExcerpt##title,
                   ])}>
                   <Gatsby.Link _to=fullPath rel="bookmark">
                     {React.string(title)}
                   </Gatsby.Link>
                 </h3>
               </header>
               <div className={stylesExcerpt##content}>
                 <figure
                   className={Cn.make([
                     "full-bleed-small",
                     stylesExcerpt##coverFigure,
                   ])}>
                   <Gatsby.Link
                     _to=fullPath
                     className={stylesExcerpt##coverLink}
                     tabIndex=(-1)>
                     <video
                       autoPlay=true
                       muted=true
                       loop=true
                       height="90"
                       width="160">
                       <source src=montageMp4 type_="video/mp4" />
                       <source src=montageWebm type_="video/webm" />
                     </video>
                   </Gatsby.Link>
                 </figure>
                 <p
                   className={Cn.make([
                     "has-small-font-size",
                     stylesExcerpt##text,
                   ])}>
                   {j|
I produced instructional videos for Chattahoochee Valley Libraries. This was in
part a response to the COVID-19 crisis. These videos were a way to extend
library services to patrons while our doors were closed to the public.
             |j}
                   ->React.string
                 </p>
                 <Externals.VisuallyHidden>
                   <Gatsby.Link
                     _to=fullPath
                     className={Cn.make(["button-link__link"])}
                     rel="bookmark">
                     {["Open", "title"] |> String.concat(" ") |> React.string}
                   </Gatsby.Link>
                 </Externals.VisuallyHidden>
               </div>
             </article>
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
             <Excerpt fullPath ?thumbnail title isWide=false>
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
             <Excerpt fullPath ?thumbnail title isWide=false>
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
             <Excerpt fullPath ?thumbnail title isWide=false>
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
             <Excerpt fullPath ?thumbnail title isWide=false>
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
             <Excerpt fullPath ?thumbnail title isWide=false>
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
             <Excerpt fullPath ?thumbnail title isWide=false>
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
             <Excerpt fullPath ?thumbnail title isWide=true>
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
             <Excerpt fullPath ?thumbnail title isWide=true>
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
             <Excerpt fullPath ?thumbnail title isWide=false>
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
             <Excerpt fullPath ?thumbnail title isWide=false>
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
           propsOfDict(
             pages, "how-play-chess", (. {fullPath, thumbnail, title}) =>
             <Excerpt fullPath ?thumbnail title isWide=false>
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
