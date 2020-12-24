const { makeAst } = require("acutis-lang");
const path = require("path");
const fs = require("fs").promises;

const manifestPath = path.resolve(__dirname, "../_site/manifest.json");

module.exports = (render, props, children) =>
  fs.readFile(manifestPath, { encoding: "utf8" }).then((data) => {
    const x = JSON.parse(data)[props.asset];
    if (x) {
      return render(makeAst(`{{ x }}`, "Webpack"), { x: x }, children);
    } else {
      throw new Error(`${props.asset} doesn't exist in the manifest.`);
    }
  });
