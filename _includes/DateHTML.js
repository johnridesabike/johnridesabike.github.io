const { makeAst } = require("acutis-lang");

const ast = makeAst(
  `
<time datetime="{{ year }}-{{ month }}-{{ day }}">
  {{ Children }}
</time>
`,
  module.filename
);

module.exports = (render, { date }, children) =>
  render(
    ast,
    {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    },
    children
  );
