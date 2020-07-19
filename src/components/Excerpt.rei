type link = [ | `External(string) | `Internal(string)];

type size = [ | `Wide | `Half];

[@react.component]
let make:
  (
    ~className: string=?,
    ~size: size,
    ~fullPath: link,
    ~title: string,
    ~thumbnail: Query.Fragment.PageExcerpt.Thumbnail.t,
    ~children: React.element
  ) =>
  React.element;

let fromQuery:
  (~size: size, option(Query.Fragment.PageExcerpt.t)) => React.element;
