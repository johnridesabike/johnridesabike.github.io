module Raw: {type t;};
let query: string;

[@react.component]
let make: (~pageContext: 'a, ~data: Raw.t) => React.element;

let default:
  {
    .
    "data": Raw.t,
    "pageContext": 'a,
  } =>
  React.element;
