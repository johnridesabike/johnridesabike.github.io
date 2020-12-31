const path = require("path");
const fs = require("fs").promises;

const manifestPath = path.resolve(__dirname, "../_site/manifest.json");

module.exports = (env, props, children) =>
  fs.readFile(manifestPath, { encoding: "utf8" }).then((data) => {
    const x = JSON.parse(data)[props.asset];
    if (x) {
      return env.return(x);
    } else {
      return env.error(`${props.asset} doesn't exist in the manifest.`);
    }
  });
