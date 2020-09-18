%raw
"import { graphql } from 'gatsby'";

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
  let make = (~date, ~isoDate) =>
    <span>
      <time dateTime=isoDate>
        <Icons.Calendar />
        {" Updated on " ++ date |> React.string}
      </time>
    </span>;
};

module ImageFluid = QueryFragments.ImageFluid;

[%graphql
  {|
query PageByPath($path: String!) {
  markdownRemark(fields: {fullPath: {eq: $path}}) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY") @ppxCustom(module: "DateTime")
      isoDate: date @ppxCustom(module: "DateTime")
      title
      description
      thumbnail {
        caption
        image {
          publicURL
          sharpImg: childImageSharp {
            fluid(srcSetBreakpoints: [600, 1200]) {
              ...ImageFluid
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

[@react.component]
let make = (~data) => {
  switch (data->unsafe_fromJson->parse) {
  | {
      markdownRemark:
        Some({
          html: Some(html),
          frontmatter: {
            title,
            thumbnail,
            date,
            isoDate,
            attachments,
            description,
          },
        }),
    } =>
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
                | Some({fluid: Some(fluid)}) =>
                  <Gatsby.Img
                    fluid
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
           | None => React.null
           }}
          <div className=styles##headerWrap>
            <h1 className=Cn.("has-title-font" <:> styles##title)>
              title->React.string
            </h1>
          </div>
        </div>
      }>
      <Seo title={`Str(title)} description={`Str(description)} />
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
               {Array.map(
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
                ->React.array}
             </div>
           }}
          <footer className=Cn.(styles##footer <:> "has-ui-font")>
            <div className=Cn.(styles##postTime <:> styles##footerItem)>
              <PostedOn date isoDate />
            </div>
          </footer>
        </article>
      </main>
    </Layout>
  | _ => React.null
  };
};

let default = make;
