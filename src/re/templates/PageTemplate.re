module T = QueryTypes;
type data = T.PageTemplate.data;

let styles = Gatsby.loadCssModule("./page.module.css");

module PostedBy = {
  [@react.component]
  let make = (~author) =>
    <span className="author byline">
      <Icons.Person />
      author->React.string
    </span>;
};

module PostedOn = {
  [@react.component]
  let make = (~date, ~isoDate, ~className="") =>
    <span className>
      <time dateTime=isoDate>
        <Icons.Calendar />
        {" Posted on " ++ date |> React.string}
      </time>
    </span>;
};

[@react.component]
let make = (~pageContext as _, ~data: data) => {
  let T.PageTemplate.{frontmatter, html} = data.markdownRemark;
  let T.PageTemplate.{
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
        className=Cn.(
          "has-ui-font"
          <:>
          styles##header
          <:> onSome(styles##hasThumbnail, Js.Nullable.toOption(thumbnail))
        )>
        {switch (Js.Nullable.toOption(thumbnail)) {
         | None => React.null
         | Some({publicURL, sharpImg}) =>
           <figure className=Cn.("full-bleed" <:> styles##coverFigure)>
             {switch (Js.Nullable.toOption(sharpImg)) {
              | Some({
                  mobileImage: {
                    src: mSrc,
                    srcSet: mSrcSet,
                    sizes: mSizes,
                    aspectRatio: mAspectRatio,
                  },
                  tabletImage: {
                    src: tSrc,
                    srcSet: tSrcSet,
                    sizes: tSizes,
                    aspectRatio: tAspectRatio,
                  },
                  desktopImage: {
                    src: dSrc,
                    srcSet: dSrcSet,
                    sizes: dSizes,
                    aspectRatio: dAspectRatio,
                  },
                }) =>
                <Gatsby.Img
                  fluid=[|
                    {
                      src: mSrc,
                      srcSet: mSrcSet,
                      sizes: mSizes,
                      aspectRatio: mAspectRatio,
                      media: "(max-width: 600px)",
                    },
                    {
                      src: tSrc,
                      srcSet: tSrcSet,
                      sizes: tSizes,
                      aspectRatio: tAspectRatio,
                      media: "(max-width: 1200px)",
                    },
                    {
                      src: dSrc,
                      srcSet: dSrcSet,
                      sizes: dSizes,
                      aspectRatio: dAspectRatio,
                      media: "(min-width: 1200px)",
                    },
                  |]
                  className=styles##coverImg
                  alt={
                    caption
                    ->Js.Nullable.toOption
                    ->Belt.Option.getWithDefault("")
                  }
                />
              | None =>
                <img
                  src=publicURL
                  className=styles##coverImg
                  alt=?{caption->Js.Nullable.toOption}
                />
              }}
             {switch (Js.Nullable.toOption(caption)) {
              | Some(caption) =>
                <figcaption
                  className=Cn.(
                    styles##coverFigureCaption <:> "has-xsmall-font-size"
                  )>
                  <span className=styles##captionText>
                    caption->React.string
                  </span>
                </figcaption>
              | None => React.null
              }}
           </figure>
         }}
        <div className=styles##headerWrap>
          <h1 className=Cn.("has-title-font" <:> styles##title)>
            title->React.string
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
             <h3> "Downloads"->React.string </h3>
             {Js.Array2.map(attachments, file =>
                <div key={file.fileUrl} className="wp-block-file">
                  <a href={file.fileUrl}>
                    {[file.name, ".", file.extension]
                     |> String.concat("")
                     |> React.string}
                  </a>
                  " "->React.string
                  <a
                    href={file.fileUrl}
                    className="wp-block-file__button"
                    download="true">
                    "Download"->React.string
                  </a>
                </div>
              )
              |> React.array}
           </div>
         }}
        <footer className=Cn.(styles##footer <:> "has-ui-font")>
          <div className=Cn.(styles##postTime <:> styles##footerItem)>
            <time dateTime=isoUpdated>
              {switch (
                 Js.Nullable.toOption(updated),
                 Js.Nullable.toOption(frontmatterDate),
               ) {
               | (Some(updated), _) =>
                 "Updated on " ++ updated |> React.string
               | (_, Some(date)) => "Updated on " ++ date |> React.string
               | (None, None) => React.null
               }}
            </time>
          </div>
        </footer>
      </article>
    </main>
  </Layout>;
};
