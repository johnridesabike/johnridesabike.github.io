let styles = Gatsby.loadCssModule("./Template_Page.module.css");

/*
 module PostedBy = {
   [@react.component]
   let make = (~author) =>
     <span className="author byline">
       <Icons.Person />
       author->React.string
     </span>;
 };
 */

module PostedOn = {
  [@react.component]
  let make = (~date, ~isoDate, ~className="") =>
    <span className>
      <time dateTime=isoDate>
        <Icons.Calendar />
        {" Updated on " ++ date |> React.string}
      </time>
    </span>;
};

/*
 module DateTime = {
   let parse = x =>
     x->Js.Nullable.toOption->Option.flatMap(Js.Json.decodeString);
   let serialize = Js.Json.string;
   type t = string;
 };
 */

[%graphql
  {|
query PageByPath($path: String!) {
  markdownRemark(fields: {fullPath: {eq: $path}}) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      isoDate: date
      title
      thumbnail {
        caption
        image {
          publicURL
          sharpImg: childImageSharp {
            mobileImage: fluid(maxWidth: 600) {
              ...Query.Fragments.ImageFluid
            }
            tabletImage: fluid(maxWidth: 1200) {
              ...Query.Fragments.ImageFluid
            }
            desktopImage: fluid(maxWidth: 600) {
              ...Query.Fragments.ImageFluid
            }
          }
        }
      }
      attachments {
        publicURL
        name
        extension
      }
    }
  }
}|};
  {inline: true}
];

let _ = makeVariables;
let _ = definition;

[@react.component]
let make = (~pageContext as _, ~data: Raw.t) => {
  let {markdownRemark} = parse(data);
  switch (markdownRemark) {
  | Some({
      frontmatter: {title, thumbnail, date, isoDate, attachments},
      html: Some(html),
    }) =>
    <Layout
      entryHeader={
        <div
          className=Cn.(
            "has-ui-font"
            <:>
            styles##header
            <:> onSome(styles##hasThumbnail, thumbnail)
          )>
          {switch (thumbnail) {
           | Some({caption, image: {publicURL, sharpImg}}) =>
             <figure className=Cn.("full-bleed" <:> styles##coverFigure)>
               {switch (sharpImg) {
                | Some({
                    mobileImage: Some(mobileImage),
                    tabletImage: Some(tabletImage),
                    desktopImage: Some(desktopImage),
                  }) =>
                  <Gatsby.Img
                    fluid=[|
                      Gatsby.Img.Fluid.make(
                        mobileImage,
                        "(max-width: 600px)",
                      ),
                      Gatsby.Img.Fluid.make(
                        tabletImage,
                        "(max-width: 1200px)",
                      ),
                      Gatsby.Img.Fluid.make(
                        desktopImage,
                        "(min-width: 1200px)",
                      ),
                    |]
                    className=styles##coverImg
                    alt=caption
                  />
                | _ =>
                  switch (publicURL) {
                  | None => React.null
                  | Some(publicURL) =>
                    <img
                      src=publicURL
                      className=styles##coverImg
                      alt=caption
                    />
                  }
                }}
               <figcaption
                 className=Cn.(
                   styles##coverFigureCaption <:> "has-xsmall-font-size"
                 )>
                 <span className=styles##captionText>
                   caption->React.string
                 </span>
               </figcaption>
             </figure>
           | _ => React.null
           }}
          <div className=styles##headerWrap>
            <h1 className=Cn.("has-title-font" <:> styles##title)>
              title->React.string
            </h1>
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
          {switch (attachments) {
           | None => React.null
           | Some(attachments) =>
             <div id="attachments" className="attachments has-ui-font">
               <h3> "Downloads"->React.string </h3>
               {Js.Array2.map(
                  attachments,
                  fun
                  | {publicURL: Some(publicURL), extension, name} =>
                    <div key=publicURL className="wp-block-file">
                      <a href=publicURL>
                        {name ++ "." ++ extension |> React.string}
                      </a>
                      " "->React.string
                      <a
                        href=publicURL
                        className="wp-block-file__button"
                        download="true">
                        "Download"->React.string
                      </a>
                    </div>
                  | _ => React.null,
                )
                |> React.array}
             </div>
           }}
          <footer className=Cn.(styles##footer <:> "has-ui-font")>
            <div className=Cn.(styles##postTime <:> styles##footerItem)>
              {switch (
                 Js.Json.decodeString(date),
                 Js.Json.decodeString(isoDate),
               ) {
               | (Some(date), Some(isoDate)) => <PostedOn date isoDate />
               | _ => React.null
               }}
            </div>
          </footer>
        </article>
      </main>
    </Layout>
  | _ => React.null
  };
};

let default = make;

