[@react.component]
let make = (~description=?, ~lang="en", ~meta=[||], ~keywords=[||], ~title) => {
  let Query.SiteMetadata.{site} = Query.useSiteMetaData();
  let description =
    switch (description) {
    | None =>
      site
      ->Option.flatMap(x => x.Query.SiteMetadata.siteMetadata)
      ->Option.flatMap(x => x.Query.SiteMetadata.description)
      ->Option.getWithDefault("")
    | Some(description) => description
    };
  <BsReactHelmet
    title
    htmlAttributes={BsReactHelmet.htmlAttributes(~lang)}
    titleTemplate={
      "%s | "
      ++ site
         ->Option.flatMap(x => x.Query.SiteMetadata.siteMetadata)
         ->Option.flatMap(x => x.Query.SiteMetadata.title)
         ->Option.getWithDefault("")
    }
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
          ~content=?
            site
            ->Option.flatMap(x => x.Query.SiteMetadata.siteMetadata)
            ->Option.flatMap(x => x.Query.SiteMetadata.author),
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
