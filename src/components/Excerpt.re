module PageExcerpt = Query.Fragment.PageExcerpt;

let styles = Gatsby.loadCssModule("./Excerpt.module.css");

type link = [ | `External(string) | `Internal(string)];

[@react.component]
module SpecialLink = {
  [@react.component]
  let make =
      (
        ~_to: link,
        ~children,
        ~rel="",
        ~className="",
        ~ariaHidden=false,
        ~tabIndex=0,
      ) => {
    switch (_to) {
    | `External(href) =>
      <a rel="external" href className ariaHidden tabIndex> children </a>
    | `Internal(_to) =>
      <span ariaHidden>
        <Gatsby.Link _to rel className tabIndex> children </Gatsby.Link>
      </span>
    };
  };
};

type size = [ | `Wide | `Half];

[@react.component]
let make =
    (
      ~className="",
      ~size: size,
      ~fullPath,
      ~title,
      ~thumbnail: PageExcerpt.Thumbnail.t,
      ~children,
    ) => {
  <article
    className=Cn.(
      styles##excerpt <:> className <:> on(styles##isWide, size == `Wide)
    )>
    <header className="has-ui-font">
      <h3
        className=Cn.(
          "has-body-font"
          <:> "has-medium-font-size"
          <:> "has-no-text-transform"
          <:>
          styles##title
        )>
        <SpecialLink _to=fullPath rel="bookmark">
          {React.string(title)}
          {switch (fullPath) {
           | `External(_) =>
             <React.Fragment>
               {React.string(" ")}
               <Icons.ExternalLink />
             </React.Fragment>
           | `Internal(_) => React.null
           }}
        </SpecialLink>
      </h3>
    </header>
    <div className={styles##content}>
      {switch (thumbnail) {
       | Image({src, alt}) =>
         <figure className=Cn.("full-bleed-small" <:> styles##coverFigure)>
           <SpecialLink
             _to=fullPath
             className={styles##coverLink}
             ariaHidden=true
             tabIndex=(-1)>
             <img
               width="128"
               height="96"
               src
               className={styles##coverImg}
               alt
             />
           </SpecialLink>
         </figure>
       | FixedImg(fixed, alt) =>
         <figure className=Cn.("full-bleed-small" <:> styles##coverFigure)>
           <SpecialLink
             _to=fullPath
             className={styles##coverLink}
             ariaHidden=true
             tabIndex=(-1)>
             <Gatsby.Img
               fixed
               alt
               style={ReactDOMRe.Style.make(
                 ~position="inherit",
                 ~width="inherit",
                 ~height="inherit",
                 (),
               )}
             />
           </SpecialLink>
         </figure>
       | Video({height, width, sources}) =>
         <figure className=Cn.("full-bleed-small" <:> styles##coverFigure)>
           <SpecialLink
             _to=fullPath
             className={styles##coverLink}
             ariaHidden=true
             tabIndex=(-1)>
             {ReactDOMRe.createElementVariadic(
                "video",
                ~props=
                  ReactDOMRe.objToDOMProps({
                    "className": styles##coverImg,
                    "autoPlay": true,
                    "muted": true,
                    "loop": true,
                    "playsInline": true,
                    "height": height,
                    "width": width,
                  }),
                Belt.Array.map(sources, ({src, type_}) =>
                  <source src key=src type_ />
                ),
              )}
           </SpecialLink>
         </figure>

       | Null => React.null
       }}
      <p className=Cn.("has-small-font-size" <:> styles##text)> children </p>
      <Externals.VisuallyHidden>
        <SpecialLink _to=fullPath className="button-link__link" rel="bookmark">
          {"Open " ++ title |> React.string}
        </SpecialLink>
      </Externals.VisuallyHidden>
    </div>
  </article>;
};

let fromQuery = (~size) =>
  fun
  | None => "ERROR: page not found"->React.string
  | Some(
      PageExcerpt.{
        fields: {fullPath, _},
        frontmatter: {title, thumbnail, description},
      },
    ) =>
    React.createElement(
      make,
      makeProps(
        ~fullPath=`Internal(fullPath),
        ~thumbnail={
          PageExcerpt.Thumbnail.make(thumbnail);
        },
        ~title,
        ~size,
        ~children=description->React.string,
        (),
      ),
    );
