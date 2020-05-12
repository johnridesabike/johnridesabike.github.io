type nodeApiHelpers;

let onCreateNode: nodeApiHelpers => unit;
let createPages: nodeApiHelpers => Promise.rejectable(unit, Js.Promise.error);
