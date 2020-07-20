type metadata = [ | `Site | `Str(string)];

[@react.component]
let make:
  (~title: metadata, ~description: metadata, ~keywords: array(string)=?) =>
  React.element;
