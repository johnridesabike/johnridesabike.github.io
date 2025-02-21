import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";
import postcss from "postcss";
import postcssImport from "postcss-import";
import postcssUrl from "postcss-url";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";

let postcssWithOptions = postcss([
  postcssImport,
  postcssUrl({ url: "copy" }),
  postcssPresetEnv(),
  cssnano,
]);

let cssPath = "style.css";
let cssFile = fs.readFile(
  path.join(path.dirname(url.fileURLToPath(import.meta.url)), cssPath),
);

export default function Template() {}
Template.prototype.data = async function data() {
  let css = await cssFile;
  return {
    cssPath,
    css,
    permalink: path.join("assets", cssPath),
    eleventyExcludeFromCollections: true,
  };
};

Template.prototype.render = async function render({ css, cssPath }) {
  let result = await postcssWithOptions.process(css, {
    from: cssPath,
    to: path.join("_site", "assets", cssPath),
  });
  return result.css;
};
