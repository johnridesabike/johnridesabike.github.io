const { makeAst } = require("acutis-lang");

const formatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
});

const ast = makeAst("{{ date }}", module.filename);

module.exports = (render, { date }, children) =>
  render(ast, { date: formatter.format(date) }, children);
