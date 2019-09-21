module Link = {
  [@bs.module "gatsby"] [@react.component]
  external make:
    (
      ~_to: string,
      ~rel: string=?,
      ~className: string=?,
      ~tabIndex: int=?,
      ~children: React.element
    ) =>
    React.element =
    "Link";
};

[@bs.val] external loadCssModule: string => Js.t({..}) = "require";
[@bs.val] external loadJpg: string => string = "require";