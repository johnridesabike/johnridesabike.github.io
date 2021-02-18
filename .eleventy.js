const Image = require("@11ty/eleventy-img");
const path = require("path");
const htmlmin = require("html-minifier");
const acutis = require("./_11ty/eleventyAcutis");
const acutisComponents = require("./_includes/acutisComponents");

const manifestPath = path.resolve(
  __dirname,
  "_site",
  "assets",
  "manifest.json"
);

const contentWidth = 640;

function renderImg({ formats, src, alt }) {
  const opts = {
    widths: [contentWidth, contentWidth * 1.5, contentWidth * 2],
    formats,
    urlPath: "/assets/images/minified/",
    outputDir: path.join(".", "_site", "assets", "images", "minified"),
  };
  const stats = Image.statsSync("./" + src, opts);
  Image("./" + src, opts);

  const indexToSize = (i) => `${i / 2 + 1}x`;

  const srcset = (format) =>
    format.map(({ url }, i) => `${url} ${indexToSize(i)}`).join(", ");

  const format = stats[formats[0]];
  const img = format[0];

  return `<img
    srcset="${srcset(format)}" 
    src="${img.url}"
    width="${img.width}"
    height="${img.height}"
    alt="${alt}"
    loading="lazy" />`;
}

function mdImages(md, _ops) {
  const defaultRender = md.renderer.rules.image;
  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const src = token.attrs[token.attrIndex("src")][1];
    const alt = token.attrs[token.attrIndex("alt")][1];
    switch (path.extname(src)) {
      case ".svg":
        return defaultRender(tokens, idx, options, env, self);
      case ".png":
        return renderImg({ formats: ["png"], src, alt });
      default:
        return renderImg({ formats: ["jpeg"], src, alt });
    }
  };
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/attachments");
  eleventyConfig.addPassthroughCopy("assets/vector");
  eleventyConfig.addPassthroughCopy("assets/video");
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy(".nojekyll");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPlugin(acutis, { components: acutisComponents });
  eleventyConfig.setLibrary(
    "md",
    require("markdown-it")({
      html: true,
      breaks: false,
      linkify: true,
      typographer: true,
    })
      .use(require("markdown-it-footnote"))
      .use(mdImages)
      .use(require("markdown-it-implicit-figures"), { figcaption: true })
  );
  eleventyConfig.setBrowserSyncConfig({
    ...eleventyConfig.browserSyncConfig,
    // Reload when manifest file changes
    files: [manifestPath],
    // Speed/clean up build time
    ui: false,
    ghostMode: false,
  });
  if (process.env.ELEVENTY_ENV === "production") {
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
      // Eleventy 1.0+: use this.inputPath and this.outputPath instead
      if (outputPath && outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
        });
        return minified;
      } else {
        return content;
      }
    });
  }
  return {
    templateFormats: ["md", "acutis"],
    markdownTemplateEngine: "acutis",
    htmlTemplateEngine: "acutis",
    dataTemplateEngine: "acutis",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
