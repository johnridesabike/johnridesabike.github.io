type description = [ | `Site | `Str(string)];

[@react.component]
let make = (~description: description, ~keywords=[||], ~title) => {
  let Query.SiteMetadata.{site} = Query.useSiteMetaData();
  let description =
    switch (description) {
    | `Site =>
      switch (site) {
      | None => ""
      | Some(Query.SiteMetadata.{siteMetadata: {description, _}}) => description
      }
    | `Str(description) => description
    };
  <BsReactHelmet
    title
    htmlAttributes={BsReactHelmet.htmlAttributes(~lang="en-US")}
    titleTemplate={
      "%s | "
      ++ site->Option.mapWithDefault("", x =>
           Query.SiteMetadata.(x.siteMetadata.title)
         )
    }
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
      BsReactHelmet.meta(
        ~property="twitter:creator",
        ~content=?
          site->Option.map(x => Query.SiteMetadata.(x.siteMetadata.author)),
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
  />;
};
