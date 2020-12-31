const { Compile } = require("acutis-lang");

const ast = Compile.makeAst(
  `
<time datetime="{{ dateJSON }}">
  {{ Children }}
</time>
`,
  module.filename
);

module.exports = (env, { date }, children) =>
  env.render(
    ast,
    {
      dateJSON: date.toJSON(),
    },
    children
  );
