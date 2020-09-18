let query: Gatsby.query;

[@react.component]
let make: (~data: Js.Json.t) => React.element;

let default: {. "data": Js.Json.t} => React.element;
