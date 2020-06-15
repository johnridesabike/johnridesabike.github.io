type t = option(string);
let parse: Js.Json.t => t;
let serialize: t => Js.Json.t;
