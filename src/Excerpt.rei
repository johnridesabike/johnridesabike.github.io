[@react.component]
let make:
  (
    ~className: string=?,
    ~isWide: bool,
    ~fullPath: string,
    ~isExternal: bool=?,
    ~title: string,
    ~thumbnail: Queries.Thumbnail.t,
    ~children: React.element
  ) =>
  React.element;
