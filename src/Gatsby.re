type query

module type GraphQLQuery = {
  module Raw: {
    type t
  }
  type t
  let query: query
  external unsafe_fromJson: Js.Json.t => Raw.t = "%identity"
  let parse: Raw.t => t
}

module ExtendQuery = (M: GraphQLQuery) => {
  [@bs.module "gatsby"]
  external useStaticQuery: query => M.Raw.t = "useStaticQuery"
}

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
      ~fixed: 'unsafe_fixed=?,
      ~fluid: 'unsafe_fluid=?,
      ~alt: string,
      ~className: string=?,
      ~style: ReactDOMRe.Style.t=?
    ) =>
    React.element =
    "default";
};

[@bs.val] external loadCssModule: string => Js.t({..}) = "require";
