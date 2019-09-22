// This assumes every long slug is `/directory/slug` format.
let getSlug = longSlug => Js.String2.split(longSlug, "/")[2];

let dictOfEdges = edges => {
  let dict = Js.Dict.empty();
  Js.Array2.forEach(
    edges,
    edge => {
      let slug = getSlug(edge##node##fields##slug);
      Js.Dict.set(dict, slug, edge##node);
    },
  );
  dict;
};

type fields = {
  isWide: bool,
  slug: string,
  thumbnailURL: Js.Nullable.t(string),
  title: string,
};

let nodeFields = node => {
  isWide: Js.Nullable.isNullable(node##frontmatter##thumbnail),
  slug: node##fields##slug,
  thumbnailURL:
    switch (Js.Nullable.toOption(node##frontmatter##thumbnail)) {
    | Some(thumbnail) => Js.Nullable.return(thumbnail##publicURL)
    | None => Js.Nullable.null
    },
  title: node##frontmatter##title,
};