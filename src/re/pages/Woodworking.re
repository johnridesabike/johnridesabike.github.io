let styles = Gatsby.loadCssModule("../../pages/index.module.css");

[@react.component]
let make = () => {
  let query = Queries.useWoodworkingCategory();
  let pages = Utils.dictOfEdges(query##allMarkdownRemark##edges);
  let chesstable =
    Js.Dict.unsafeGet(pages, "marble-top-chessboard-end-table")
    |> Utils.nodeFields;
  let desk =
    Js.Dict.unsafeGet(pages, "standing-desk-converter-diy")
    |> Utils.nodeFields;
  <section
    className={
      styles##section;
    }>
    <header className={styles##sectionHeader}>
      <h1>
        <span role="img" ariaHidden=true> {React.string @@ {j|🛠|j}} </span>
        {React.string @@ " Woodworking projects"}
      </h1>
      <p>
        {React.string @@
         {|Sometimes I build furniture, and these are the guides I
                    wrote for them.|}}
      </p>
    </header>
    <h2 className={styles##divider}> {React.string @@ "Guides"} </h2>
    <Excerpt
      isWide=false
      isExternal=false
      title={chesstable.title}
      slug={chesstable.slug}
      thumbnailURL={chesstable.thumbnailURL}>
      // {... nodeFields(pages["marble-top-chessboard-end-table"])}

        {React.string @@
         {|I made a custom end-table with an old marble chessboard and some
                two-by-fours. This guide covers how it was done, and some tips
                for building your own.|}}
      </Excerpt>
    <Excerpt
      isWide=false
      isExternal=false
      title={desk.title}
      slug={desk.slug}
      thumbnailURL={desk.thumbnailURL}>
      // {... nodeFields(pages["standing-desk-converter-diy"])}

        {React.string @@
         {|I turned a old, regular desk into a fancy new standing desk.
                This covers how I did it, how you can make your own, and some
                general tips about standing desks.|}}
      </Excerpt>
  </section>;
};