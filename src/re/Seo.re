[@react.component]
let make = (~description=?, ~lang="en", ~meta=[||], ~keywords=[||], ~title) => {
  let site = Queries.SiteMetadata.useSiteMetadata();
  let description =
    switch (description) {
    | None => Queries.SiteMetadata.description(site)
    | Some(description) => description
    };
  <BsReactHelmet
    title
    htmlAttributes={BsReactHelmet.htmlAttributes(~lang)}
    titleTemplate={"%s | " ++ Queries.SiteMetadata.title(site)}
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
          ~content=Queries.SiteMetadata.author(site),
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
