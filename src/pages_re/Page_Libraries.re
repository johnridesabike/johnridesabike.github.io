[%%raw "import { graphql } from 'gatsby'"];

let styles = Gatsby.loadCssModule("./Page_Index.module.css");

module PageExcerpt = Query.Fragment.PageExcerpt;

[%graphql
  {|
query LibraryPages {
  libraryMedia: markdownRemark(fields: {slug: {eq: "library-media"}}) {
    ...PageExcerpt
  }
  academicStudentSupport: markdownRemark(fields: {slug: {eq: "academic-library-student-support"}}) {
    ...PageExcerpt
  }
  openAccessPres: markdownRemark(fields: {slug: {eq: "open-access-presentation"}}) {
    ...PageExcerpt
  }
  academicFacultySupport: markdownRemark(fields: {slug: {eq: "academic-library-faculty-support"}}) {
    ...PageExcerpt
  }
  dmp: markdownRemark(fields: {slug: {eq: "data-management-plan-evolving-pronouns"}}) {
    ...PageExcerpt
  }
  opacAnalysis: markdownRemark(fields: {slug: {eq: "ex-libris-opac-analysis"}}) {
    ...PageExcerpt
  }
  collectionDevelopment: markdownRemark(fields: {slug: {eq: "collection-development-policy"}}) {
    ...PageExcerpt
  }
  selectionPolicy: markdownRemark(fields: {slug: {eq: "selection-policy-materials"}}) {
    ...PageExcerpt
  }
  researchHispanic: markdownRemark(fields: {slug: {eq: "researching-hispanic-children-books"}}) {
    ...PageExcerpt
  }
  twitterRPres: markdownRemark(fields: {slug: {eq: "library-twitter-r-presentation"}}) {
    ...PageExcerpt
  }
  envAnalysis: markdownRemark(fields: {slug: {eq: "environmental-analysis"}}) {
    ...PageExcerpt
  }
  playChess: markdownRemark(fields: {slug: {eq: "how-play-chess"}}) {
    ...PageExcerpt
  }
}|}
];

module ExcerptList = {
  [@react.component]
  let make = () => {
    let query =
      LibraryPages.query->Gatsby.useStaticQueryUnsafe->LibraryPages.parse;
    let videos = Query.useVideos();
    let montage =
      PageExcerpt.Video.{
        height: "90",
        width: "160",
        sources:
          switch (videos) {
          | {
              montageMp4: Some({publicURL: Some(mp4)}),
              montageWebm: Some({publicURL: Some(webm)}),
            } => [|
              {src: mp4, type_: "video/mp4"},
              {src: webm, type_: "video/webm"},
            |]
          | {montageMp4: Some({publicURL: Some(mp4)}), montageWebm: None} => [|
              {src: mp4, type_: "video/mp4"},
            |]
          | {montageMp4: None, montageWebm: Some({publicURL: Some(webm)})} => [|
              {src: webm, type_: "video/webm"},
            |]
          | _ => [||]
          },
      };
    <React.Fragment>
      <section className={styles##section}>
        <header className={styles##sectionHeader}>
          <h1>
            <span role="img" ariaHidden=true> {j|📽|j}->React.string </span>
            " Media production"->React.string
          </h1>
        </header>
        <h2 className={styles##divider}> "Public libraries"->React.string </h2>
        {switch (query.libraryMedia) {
         | None => React.null
         | Some({
             fields: {fullPath, _},
             frontmatter: {title, description, _},
           }) =>
           <Excerpt fullPath thumbnail={Video(montage)} title size=`Wide>
             description->React.string
           </Excerpt>
         }}
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
        {Excerpt.fromQuery(~size=`Half, query.academicStudentSupport)}
        {Excerpt.fromQuery(~size=`Half, query.openAccessPres)}
        {Excerpt.fromQuery(~size=`Half, query.academicFacultySupport)}
        {Excerpt.fromQuery(~size=`Half, query.dmp)}
        <h2 className={styles##divider}>
          "Technical services"->React.string
        </h2>
        {Excerpt.fromQuery(~size=`Half, query.opacAnalysis)}
        {Excerpt.fromQuery(~size=`Half, query.collectionDevelopment)}
        {Excerpt.fromQuery(~size=`Wide, query.selectionPolicy)}
        <h2 className={styles##divider}> "Research"->React.string </h2>
        {Excerpt.fromQuery(~size=`Wide, query.researchHispanic)}
        {Excerpt.fromQuery(~size=`Half, query.twitterRPres)}
        {Excerpt.fromQuery(~size=`Half, query.envAnalysis)}
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
          size=`Half
          title={j|Your Library’s First Chess Tournament: From Opening to Endgame|j}
          fullPath={j|http://programminglibrarian.org/articles/your-library’s-first-chess-tournament-opening-endgame|j}
          linkType=`External
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
        {Excerpt.fromQuery(~size=`Half, query.playChess)}
      </section>
    </React.Fragment>;
  };
};

[@react.component]
let make = () =>
  <Layout>
    <Seo title="Libraries" description=`Site />
    <main id="main" className="site-main page-content"> <ExcerptList /> </main>
  </Layout>;
