type description = [ | `Site | `Str(string)];

[@react.component]
let make:
  (~description: description, ~keywords: array(string)=?, ~title: string) =>
  React.element;
