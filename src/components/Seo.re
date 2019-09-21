module BsReactHelmet = {
  [@bs.deriving abstract]
  type htmlAttributes = {lang: string};
  type bodyAttributes;
  type titleAttributes;
  [@bs.deriving abstract]
  type meta = {
    [@bs.optional]
    name: string,
    [@bs.optional]
    property: string,
    [@bs.optional]
    content: string,
  };
  type base;
  type link;
  type style;
  type script;
  type noscript;

  [@bs.module "react-helmet"] [@react.component]
  external make:
    (
      ~defer: bool=?,
      ~encodeSpecialCharacters: bool=?,
      ~onChangeClientState: unit => unit=?,
      ~htmlAttributes: htmlAttributes=?,
      ~bodyAttributes: bodyAttributes=?,
      ~titleAttributes: titleAttributes=?,
      ~defaultTitle: string=?,
      ~titleTemplate: string=?,
      // some <head> tags can be passed as props
      ~base: base=?,
      ~title: string=?,
      ~meta: array(meta)=?,
      ~link: array(link)=?,
      ~style: array(style)=?,
      ~script: array(script)=?,
      ~noscript: array(noscript)=?,
      ~children: React.element=?
    ) =>
    React.element =
    "Helmet";

  type helmetProp = {
    .
    [@bs.meth] "toComponent": unit => React.element,
    [@bs.meth] "toString": unit => string,
  };
  type helmet = {
    .
    "base": helmetProp,
    "bodyAttributes": helmetProp,
    "htmlAttributes": helmetProp,
    "link": helmetProp,
    "meta": helmetProp,
    "noscript": helmetProp,
    "script": helmetProp,
    "style": helmetProp,
    "title": helmetProp,
  };
  [@bs.val] [@bs.module "react-helmet"] [@bs.scope "Helmet"]
  external renderStatic: unit => helmet = "renderStatic";
};

[@react.component]
let make = (~description=?, ~lang="en", ~meta=[||], ~keywords=[||], ~title) => {
  let site = Queries.useSiteMetadata()##site;
  let description =
    switch (description) {
    | None => site##siteMetadata##description
    | Some(description) => description
    };
  <BsReactHelmet
    title
    htmlAttributes={BsReactHelmet.htmlAttributes(~lang)}
    titleTemplate={"%s | " ++ site##siteMetadata##title}
    meta={
      [|
        BsReactHelmet.meta(~name="description", ~content=description, ()),
        BsReactHelmet.meta(~property="og:title", ~content=title, ()),
        BsReactHelmet.meta(
          ~property="og:description",
          ~content=description,
          (),
        ),
        BsReactHelmet.meta(~property="og:type", ~content="website", ()),
        BsReactHelmet.meta(~property="twitter:card", ~content="summary", ()),
        BsReactHelmet.meta(
          ~property="twitter:creator",
          ~content=site##siteMetadata##author,
          (),
        ),
        BsReactHelmet.meta(~property="twitter:title", ~content=title, ()),
        BsReactHelmet.meta(
          ~property="twitter:description",
          ~content=description,
          (),
        ),
        BsReactHelmet.meta(
          ~name="keywords",
          ~content=Js.Array2.joinWith(keywords, ", "),
          (),
        ),
      |]
      ->Js.Array2.concat(meta)
    }
  />;
};