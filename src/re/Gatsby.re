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
  module Fluid = {
    type t = {
      src: string,
      srcSet: string,
      sizes: string,
      aspectRatio: float,
      media: string,
    };
    let make =
        (
          {Query_Frag_ImageFluid.ImageFluid.src, srcSet, sizes, aspectRatio},
          media,
        ) => {
      media,
      src,
      srcSet,
      sizes,
      aspectRatio,
    };
  };
  [@bs.module "gatsby-image"] [@react.component]
  external make:
    (
      ~fixed: array(Query_Frag_ImageFixed.ImageFixed.t)=?,
      ~fluid: array(Fluid.t)=?,
      ~alt: string=?,
      ~className: string=?,
      ~style: ReactDOMRe.Style.t=?
    ) =>
    React.element =
    "default";
};

[@bs.val] external loadCssModule: string => Js.t({..}) = "require";
[@bs.val] external loadImage: string => string = "require";

[@bs.module "gatsby"]
external useStaticQueryUnsafe: 'a => 'b = "useStaticQuery";
