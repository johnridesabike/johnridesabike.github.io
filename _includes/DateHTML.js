const { makeAst } = require("acutis-lang");

const ast = makeAst(
  `
<time datetime="{{ dateJSON }}">
  {{ Children }}
</time>
`,
  module.filename
);

module.exports = (render, { date }, children) =>
  render(
    ast,
    {
      dateJSON: date.toJSON(),
    },
    children
  );
