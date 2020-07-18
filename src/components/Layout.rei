[@react.component]
let make:
  (~children: React.element, ~entryHeader: React.element=?) => React.element;

let default:
  {
    .
    "children": React.element,
    "entryHeader": option(React.element),
  } =>
  React.element;
