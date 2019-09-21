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
      ~isWide,
      ~slug,
      ~isExternal,
      ~title,
      ~thumbnailURL,
      ~children,
    ) => {
  <article
    className={Cn.make([
      styles##excerpt,
      className,
      Cn.ifTrue(styles##isWide, isWide),
    ])}>
    <header className="has-ui-font">
      <h3
        className={Cn.make([
          "has-body-font",
          "has-medium-font-size",
          "has-no-text-transform",
          styles##title,
        ])}>
        <SpecialLink _to=slug rel="bookmark" isExternal>
          {React.string(title)}
          {isExternal ? <Icons.ExternalLink /> : React.null}
        </SpecialLink>
      </h3>
    </header>
    <div className={styles##content}>
      {switch (Js.Nullable.toOption(thumbnailURL)) {
       | Some(thumbnailURL) =>
         <figure
           className={Cn.make(["full-bleed-small", styles##coverFigure])}>
           <SpecialLink
             _to=slug
             className={styles##coverLink}
             ariaHidden=true
             tabIndex=(-1)
             isExternal>
             <img
               width="128"
               height="96"
               src=thumbnailURL
               className={styles##coverImg}
               alt=""
             />
           </SpecialLink>
         </figure>
       | None => React.null
       }}
      <p className={Cn.make(["has-small-font-size", styles##text])}>
        children
      </p>
      <Externals.VisuallyHidden>
        <SpecialLink
          _to=slug
          className={Cn.make(["button-link__link"])}
          rel="bookmark"
          isExternal>
          {["Open", "title"] |> String.concat(" ") |> React.string}
        </SpecialLink>
      </Externals.VisuallyHidden>
    </div>
  </article>;
};