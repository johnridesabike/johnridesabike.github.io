const Acutis = require("acutis-lang");
const { loadTemplate, filenameToComponent } = require("acutis-lang/node-utils");
const fastGlob = require("fast-glob");
const Image = require("@11ty/eleventy-img");
const path = require("path");
const htmlmin = require("html-minifier");

const manifestPath = path.resolve(__dirname, "_site", "manifest.json");

const contentWidth = 640;

function renderImg({ formats, src, alt }) {
  const opts = {
    widths: [contentWidth, contentWidth * 1.5, contentWidth * 2],
    formats,
    urlPath: "/assets/images/",
    outputDir: "./_site/assets/images/",
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
  eleventyConfig.addPassthroughCopy(".nojekyll");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  // Remove stale cache.
  eleventyConfig.on("beforeWatch", (files) =>
    files.forEach((file) => {
      if (file.endsWith(".js")) {
        delete require.cache[require.resolve(file)];
      }
    })
  );
  const templates = {};
  let env = Acutis.Environment.Async.make(templates);
  eleventyConfig.addTemplateFormats("acutis");
  eleventyConfig.addExtension("acutis", {
    read: true,
    data: true,
    init: () =>
      fastGlob("./_includes/**/*.(js|mjs|acutis)").then((files) =>
        Promise.all(
          files.map((fileName) =>
            loadTemplate(fileName).then((file) => {
              if (file) {
                templates[filenameToComponent(fileName)] = file;
              }
            })
          )
        ).then(() => {
          env = Acutis.Environment.Async.make(templates);
        })
      ),
    compile: (src, inputPath) => (props) => {
      const template = Acutis.Compile.make(src, inputPath);
      return template(env, props, {}).then(({ NAME, VAL }) => {
        if (NAME === "errors") {
          console.error(VAL);
          return "";
        } else {
          return VAL;
        }
      });
    },
  });
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

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: "acutis",
    htmlTemplateEngine: "acutis",
    dataTemplateEngine: "acutis",

    // These are all optional, defaults are shown:
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
