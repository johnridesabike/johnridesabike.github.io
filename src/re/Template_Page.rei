module PageByPath: {module Raw: {type t;};};

[@react.component]
let make: (~pageContext: 'a, ~data: PageByPath.Raw.t) => React.element;

let default:
  {
    .
    "data": PageByPath.Raw.t,
    "pageContext": 'a,
  } =>
  React.element;

let query: 'a;
