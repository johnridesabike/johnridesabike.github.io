let styles = Gatsby.loadCssModule("./excerpt.module.css");

module SpecialLink = {
  [@react.component]
  let make =
      (
        ~isExternal,
        ~_to,
        ~children,
        ~rel="",
        ~className="",
        ~ariaHidden=false,
        ~tabIndex=0,
      ) => {
    isExternal
      ? <a rel="external" href=_to className ariaHidden tabIndex>
          children
        </a>
      : <span ariaHidden>
          <Gatsby.Link _to rel className tabIndex> children </Gatsby.Link>
        </span>;
  };
};

[@react.component]
let make =
    (
      ~className="",
      ~isWide: bool,
      ~fullPath: string,
      ~isExternal=false,
      ~title: string,
      ~thumbnail: Queries.Thumbnail.t,
      ~children,
    ) => {
  <article
    className=Cn.(
      styles##excerpt <:> className <:> on(styles##isWide, isWide)
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
        <SpecialLink _to=fullPath rel="bookmark" isExternal>
          {React.string(title)}
          {isExternal
             ? <React.Fragment>
                 {React.string(" ")}
                 <Icons.ExternalLink />
               </React.Fragment>
             : React.null}
        </SpecialLink>
      </h3>
    </header>
    <div className={styles##content}>
      {switch (thumbnail) {
       | Image({src, srcSet}) =>
         <figure className=Cn.("full-bleed-small" <:> styles##coverFigure)>
           <SpecialLink
             _to=fullPath
             className={styles##coverLink}
             ariaHidden=true
             tabIndex=(-1)
             isExternal>
             <img
               width="128"
               height="96"
               src
               ?srcSet
               className={styles##coverImg}
               alt=""
             />
           </SpecialLink>
         </figure>
       | FixedImg(fixed) =>
         <figure className=Cn.("full-bleed-small" <:> styles##coverFigure)>
           <SpecialLink
             _to=fullPath
             className={styles##coverLink}
             ariaHidden=true
             tabIndex=(-1)
             isExternal>
             <Gatsby.Img
               fixed
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
             isExternal>
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
          _to=fullPath className="button-link__link" rel="bookmark" isExternal>
          {"Open " ++ title |> React.string}
        </SpecialLink>
      </Externals.VisuallyHidden>
    </div>
  </article>;
};
