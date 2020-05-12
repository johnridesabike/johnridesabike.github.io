[@react.component]
let make:
  (
    ~className: string=?,
    ~isWide: bool,
    ~slug: string,
    ~isExternal: bool=?,
    ~title: string,
    ~thumbnailURL: string=?,
    ~children: React.element
  ) =>
  React.element;
