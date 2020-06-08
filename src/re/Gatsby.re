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
  type fluidSource = {
    src: string,
    srcSet: string,
    sizes: string,
    aspectRatio: int,
    media: string,
  };
  [@bs.module "gatsby-image"] [@react.component]
  external make:
    (
      ~fixed: array(QueryTypes.Sharp.fixed)=?,
      ~fluid: array(fluidSource)=?,
      ~alt: string=?,
      ~className: string=?,
      ~style: ReactDOMRe.Style.t=?
    ) =>
    React.element =
    "default";
};

[@bs.val] external loadCssModule: string => Js.t({..}) = "require";
[@bs.val] external loadImage: string => string = "require";
