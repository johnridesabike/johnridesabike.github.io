const {icons} = require("feather-icons");
const {makeAst} = require("acutis");

const ast = makeAst("{% raw icon %}", module.filename);

module.exports = (render, {icon}, children) =>
  render(ast, {icon: icons[icon].toSvg()}, children);
