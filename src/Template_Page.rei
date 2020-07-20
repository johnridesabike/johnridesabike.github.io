module Raw: {type t;};
let query: string;

[@react.component]
let make: (~data: Raw.t) => React.element;

let default: {. "data": Raw.t} => React.element;
