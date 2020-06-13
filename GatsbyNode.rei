type nodeApiHelpers('context);

let onCreateNode: nodeApiHelpers('context) => unit;

let createPages:
  nodeApiHelpers({. fullPath: string}) =>
  Promise.rejectable(unit, Js.Promise.error);

let createSchemaCustomization: nodeApiHelpers('context) => unit;
