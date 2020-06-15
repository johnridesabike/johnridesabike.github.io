type t = option(string);

let parse = Js.Json.decodeString;

/* This isn't completely safe but also it isn't used for anything. */
let serialize = x =>
  Option.mapWithDefault(x, Js.Json.string(""), Js.Json.string);
