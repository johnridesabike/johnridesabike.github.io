type metadata = [ | `Site | `Str(string)];

[@react.component]
let make =
    (
      ~title as pageTitle: metadata,
      ~description as pageDescription: metadata,
      ~keywords=[||],
    ) => {
  switch (QuerySiteMetadata.useQuery()) {
  | {site: None} => React.null
  | {site: Some({siteMetadata: {description, title, author}})} =>
    let description =
      switch (pageDescription) {
      | `Site => description
      | `Str(description) => description
      };
    let (title, titleTemplate) =
      switch (pageTitle) {
      | `Site => (title, "%s")
      | `Str(pageTitle) => (pageTitle, "%s | " ++ title)
      };
    <BsReactHelmet
      title
      htmlAttributes={BsReactHelmet.htmlAttributes(~lang="en-US")}
      titleTemplate
      meta=[|
        BsReactHelmet.meta(~name="description", ~content=description, ()),
        BsReactHelmet.meta(~property="og:title", ~content=title, ()),
        BsReactHelmet.meta(
          ~property="og:description",
          ~content=description,
          (),
        ),
        BsReactHelmet.meta(~property="og:type", ~content="website", ()),
        BsReactHelmet.meta(~property="twitter:card", ~content="summary", ()),
        BsReactHelmet.meta(~property="twitter:creator", ~content=author, ()),
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
    />;
  };
};
