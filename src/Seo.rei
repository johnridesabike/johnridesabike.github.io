[@react.component]
let make:
  (
    ~description: string=?,
    ~lang: string=?,
    ~meta: array(BsReactHelmet.meta)=?,
    ~keywords: array(string)=?,
    ~title: string
  ) =>
  React.element;
