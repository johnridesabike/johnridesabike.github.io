let styles = Gatsby.loadCssModule("./page.module.css");

module PostedBy = {
  [@react.component]
  let make = (~author) =>
    <span className="author byline">
      <Icons.Person />
      {React.string @@ author}
    </span>;
};

module PostedOn = {
  [@react.component]
  let make = (~date, ~isoDate, ~className="") =>
    <span className>
      <time dateTime=isoDate>
        <Icons.Calendar />
        {React.string @@ " Posted on " ++ date}
      </time>
    </span>;
};

[@react.component]
let make = (~pageContext, ~children) => {
  let data = pageContext##frontmatter;
  let thumbnail = Js.Nullable.toOption(data##thumbnail);
  let caption = Js.Nullable.toOption(data##caption);
  let date = Js.Nullable.toOption(data##date);
  let isoDate = Js.Nullable.toOption(data##isoDate);
  let author = Js.Nullable.toOption(data##author);
  let attachments = Js.Nullable.toOption(data##attachments);
  let updated = Js.Nullable.toOption(data##updated);
  <Layout
    entryHeader={
      <div
        className={Cn.make([
          "has-ui-font",
          styles##header,
          Cn.ifSome(styles##hasThumbnail, thumbnail),
        ])}>
        {switch (thumbnail) {
         | None => React.null
         | Some(thumbnail) =>
           <figure className={Cn.make(["full-bleed", styles##coverFigure])}>
             <img
               src=thumbnail##publicURL
               className=styles##coverImg
               alt={Belt.Option.getWithDefault(caption, "")}
             />
             {switch (caption) {
              | Some(caption) =>
                <figcaption
                  className={Cn.make([
                    styles##coverFigureCaption,
                    "has-xsmall-font-size",
                  ])}>
                  <span className=styles##captionText>
                    {React.string @@ caption}
                  </span>
                </figcaption>
              | None => React.null
              }}
           </figure>
         }}
        <div className=styles##headerWrap>
          <h1 className={Cn.make(["has-title-font", styles##title])}>
            {React.string @@  data##title}
          </h1>
          <div className=styles##meta>
            <div className=styles##metaWrapper>
              {switch (author) {
               | Some(author) => <PostedBy author />
               | None => React.null
               }}
              {switch (date, isoDate) {
               | (Some(date), Some(isoDate)) => <PostedOn date isoDate />
               | (None, _)
               | (_, None) => React.null
               }}
            </div>
          </div>
        </div>
      </div>
    }>
    <Seo title={data##title} />
    <main id="main" className="site-main">
      <article>
        <div
          className="page-content"
          dangerouslySetInnerHTML={"__html": children}
        />
        {switch (attachments) {
         | None => React.null
         | Some(attachments) =>
           <div id="attachments" className="attachments has-ui-font">
             <h3> {React.string @@ "Downloads"} </h3>
             {Js.Array2.map(attachments, file =>
                <div key={file##publicURL} className="wp-block-file">
                  <a href={file##publicURL}>
                    {[file##name, ".", file##extension]
                     |> String.concat("")
                     |> React.string}
                  </a>
                  {React.string @@ " "}
                  <a
                    href={file##publicURL}
                    className="wp-block-file__button"
                    download="true">
                    {React.string @@ "Download"}
                  </a>
                </div>
              )
              |> React.array}
           </div>
         }}
        <footer className={Cn.make([styles##footer, "has-ui-font"])}>
          <div className={Cn.make([styles##postTime, styles##footerItem])}>
            <time dateTime=data##isoUpdated>
              {switch (updated, date) {
               | (Some(updated), _) =>
                 React.string @@ "Updated on " ++ updated
               | (_, Some(date)) => React.string @@ "Updated on " ++ date
               | (None, None) => React.null
               }}
            </time>
          </div>
        </footer>
      </article>
    </main>
  </Layout>;
};