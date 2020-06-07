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

module Img = {
  [@bs.module "gatsby-image"] [@react.component]
  external make:
    (
      ~fixed: QueryTypes.Images.fixed,
      ~alt: string=?,
      ~className: string=?
    ) =>
    React.element =
    "default";
};

[@bs.val] external loadCssModule: string => Js.t({..}) = "require";
[@bs.val] external loadImage: string => string = "require";
