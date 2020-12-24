const fs = require("fs").promises;
const path = require("path");

const manifestPath = path.resolve(__dirname, "../_site/manifest.json");

module.exports = () =>
  fs.readFile(manifestPath, { encoding: "utf8" }).then((manifestData) => ({
    assets: Object.keys(JSON.parse(manifestData)).filter(
      (x) => x.match(/\.woff[2]?$/i) !== null
    ),
    environment: process.env.ELEVENTY_ENV,
  }));
