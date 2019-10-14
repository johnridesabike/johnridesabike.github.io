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

let default = make;