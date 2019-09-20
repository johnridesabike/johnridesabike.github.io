module Link = {
  [@bs.module "gatsby"] [@react.component]
  external make: (~_to: string, ~children: React.element) => React.element =
    "Link";
};

module SpecialLink = {
  [@react.component]
  let make = (~isExternal, ~_to, ~children) => {
    isExternal
      ? <a rel="external" href=_to> children </a> : <Link _to> children </Link>;
  };
};