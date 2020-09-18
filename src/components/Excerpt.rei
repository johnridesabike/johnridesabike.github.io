type link = [ | `External(string) | `Internal(string)];

type size = [ | `Wide | `Half];

[@react.component]
let make:
  (
    ~className: string=?,
    ~size: size,
    ~fullPath: link,
    ~title: string,
    ~thumbnail: QueryFragments.Thumbnail.t,
    ~children: React.element
  ) =>
  React.element;

let fromQuery:
  (~size: size, option(QueryFragments.PageExcerpt.t)) => React.element;
