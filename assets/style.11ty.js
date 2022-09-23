const fs = require("fs/promises");
const path = require("path");
const postcss = require("postcss");

const postcssWithOptions = postcss([
  require("postcss-import"),
  require("postcss-url")({ url: "copy" }),
  require("postcss-preset-env")(),
  require("cssnano"),
]);

const cssPath = "style.css";

module.exports = class {
  data() {
    return fs.readFile(path.join(__dirname, cssPath)).then((css) => {
      return {
        cssPath,
        css,
        permalink: path.join("assets", cssPath),
        eleventyExcludeFromCollections: true,
      };
    });
  }

  render({ css, cssPath }) {
    return postcssWithOptions
      .process(css, {
        from: cssPath,
        to: path.join("_site", "assets", cssPath),
      })
      .then((result) => result.css);
  }
};
