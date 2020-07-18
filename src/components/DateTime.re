type t = string;

let parse = x =>
  switch (Js.Json.decodeString(x)) {
  | None => failwith("DateTime.parse")
  | Some(x) => x
  };

/* This isn't completely safe but also it isn't used for anything. */
let serialize = Js.Json.string;
