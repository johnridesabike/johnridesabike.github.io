type nullable('a) = Js.Nullable.t('a);
type data = {markdownRemark}
and markdownRemark = {
  html: string,
  frontmatter,
  fields,
}
and fields = {
  slug: string,
  date: string,
}
and frontmatter = {
  [@bs.as "date"]
  frontmatterDate: nullable(string),
  isoDate: nullable(string),
  title: string,
  category: nullable(string),
  author: nullable(string),
  caption: nullable(string),
  updated: nullable(string),
  isoUpdated: string,
  thumbnail: nullable(thumbnail),
  attachments: nullable(array(attachments)),
}
and thumbnail = {publicURL: string}
and attachments = {
  [@bs.as "publicURL"]
  fileUrl: string,
  name: string,
  extension: string,
};
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
let make = (~pageContext as _, ~data: data) => {
  let {frontmatter, html} = data.markdownRemark;
  let {
    title,
    thumbnail,
    caption,
    frontmatterDate,
    isoDate,
    author,
    attachments,
    updated,
    isoUpdated,
  } = frontmatter;
  <Layout
    entryHeader={
      <div
        className={Cn.make([
          "has-ui-font",
          styles##header,
          Cn.ifSome(styles##hasThumbnail, Js.Nullable.toOption(thumbnail)),
        ])}>
        {switch (Js.Nullable.toOption(thumbnail)) {
         | None => React.null
         | Some(thumbnail) =>
           <figure className={Cn.make(["full-bleed", styles##coverFigure])}>
             <img
               src={thumbnail.publicURL}
               className=styles##coverImg
               alt={
                 Js.Nullable.toOption(caption)
                 ->Belt.Option.getWithDefault("")
               }
             />
             {switch (Js.Nullable.toOption(caption)) {
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
            {React.string @@ title}
          </h1>
          <div className=styles##meta>
            <div className=styles##metaWrapper>
              {switch (Js.Nullable.toOption(author)) {
               | Some(author) => <PostedBy author />
               | None => React.null
               }}
              {switch (
                 Js.Nullable.toOption(frontmatterDate),
                 Js.Nullable.toOption(isoDate),
               ) {
               | (Some(date), Some(isoDate)) => <PostedOn date isoDate />
               | (None, _)
               | (_, None) => React.null
               }}
            </div>
          </div>
        </div>
      </div>
    }>
    <Seo title />
    <main id="main" className="site-main">
      <article>
        <div
          className="page-content"
          dangerouslySetInnerHTML={"__html": html}
        />
        {switch (Js.Nullable.toOption(attachments)) {
         | None => React.null
         | Some(attachments) =>
           <div id="attachments" className="attachments has-ui-font">
             <h3> {React.string @@ "Downloads"} </h3>
             {Js.Array2.map(attachments, file =>
                <div key={file.fileUrl} className="wp-block-file">
                  <a href={file.fileUrl}>
                    {[file.name, ".", file.extension]
                     |> String.concat("")
                     |> React.string}
                  </a>
                  {React.string @@ " "}
                  <a
                    href={file.fileUrl}
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
            <time dateTime=isoUpdated>
              {switch (
                 Js.Nullable.toOption(updated),
                 Js.Nullable.toOption(frontmatterDate),
               ) {
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
let default = make;