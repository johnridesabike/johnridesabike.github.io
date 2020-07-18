type t('context, 'data);
type graphqlResult('data);

let onCreateNode: t(_, _) => unit;

module AllMarkdown: {
  module Raw: {type t;};
  type t;
};

let createPages:
  t({..}, AllMarkdown.Raw.t) =>
  Promise.Js.t(graphqlResult(AllMarkdown.Raw.t), Js.Promise.error);
let createSchemaCustomization: t(_, _) => unit;

type onCreatePage('context);
let onCreatePage: onCreatePage('context) => unit;
