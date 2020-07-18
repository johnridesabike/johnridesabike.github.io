module PageExcerpt = Query.Fragment.PageExcerpt;

let styles = Gatsby.loadCssModule("./Excerpt.module.css");

type link = [ | `External | `Internal];

[@react.component]
module SpecialLink = {
  [@react.component]
  let make =
      (
        ~type_: link,
        ~_to,
        ~children,
        ~rel="",
        ~className="",
        ~ariaHidden=false,
        ~tabIndex=0,
      ) => {
    switch (type_) {
    | `External =>
      <a rel="external" href=_to className ariaHidden tabIndex> children </a>
    | `Internal =>
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
      ~linkType=`Internal,
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
        <SpecialLink _to=fullPath rel="bookmark" type_=linkType>
          {React.string(title)}
          {switch (linkType) {
           | `External =>
             <React.Fragment>
               {React.string(" ")}
               <Icons.ExternalLink />
             </React.Fragment>
           | `Internal => React.null
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
             tabIndex=(-1)
             type_=linkType>
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
             tabIndex=(-1)
             type_=linkType>
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
             tabIndex=(-1)
             type_=linkType>
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
        <SpecialLink
          _to=fullPath
          className="button-link__link"
          rel="bookmark"
          type_=linkType>
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
        ~fullPath,
        ~thumbnail={
          PageExcerpt.Thumbnail.make(thumbnail);
        },
        ~title,
        ~size,
        ~children=description->React.string,
        (),
      ),
    );
