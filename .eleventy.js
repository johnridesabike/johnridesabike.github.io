const {compile, renderContextAsync, errorMessage} = require("acutis");
const {loadTemplate, filenameToComponent} = require("acutis/node-utils");
const fastGlob = require("fast-glob");
const Image = require("@11ty/eleventy-img");
const path = require("path");

const contentWidth = 640;

function renderImg({formats, src, alt}) {
  const opts = {
    widths: [contentWidth, contentWidth * 1.5, contentWidth * 2],
    formats,
    urlPath: "/assets/images/",
    outputDir: "./_site/assets/images/",
  };
  const stats = Image.statsSync("./" + src, opts);
  Image("./" + src, opts);

  function indexToSize(i) {
    switch (i) {
      case 0:
        return "1x";
      case 1:
        return "1.5x";
      case 2:
        return "2x";
    }
  }

  const defaultFormat = stats[formats[0]];
  const defaultSrc = defaultFormat[0];

  return `<picture>
      ${Object.values(stats)
        .map(
          (imageFormat) =>
            `  <source type="image/${
              imageFormat[0].format
            }" srcset="${imageFormat
              .map(({url}, i) => `${url} ${indexToSize(i)}`)
              .join(", ")}" />`
        )
        .join("\n")}
        <img
          srcset="${defaultFormat
            .map(({url}, i) => `${url} ${indexToSize(i)}`)
            .join(", ")}" 
          src="${defaultSrc.url}"
          width="${defaultSrc.width}"
          height="${defaultSrc.height}"
          alt="${alt}" />
      </picture>`;
}

function mdImages(md, _ops) {
  const defaultRender = md.renderer.rules.image;
  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const src = token.attrs[token.attrIndex("src")][1];
    const alt = token.children[0].content;
    switch (path.extname(src)) {
      case ".svg":
        return defaultRender(tokens, idx, options, env, self);
      case ".png":
        return renderImg({formats: ["png", "webp"], src, alt});
      default:
        return renderImg({formats: ["jpeg", "webp"], src, alt});
    }
  };
}

module.exports = function (config) {
  config.addPassthroughCopy("assets/attachments");
  config.addPassthroughCopy("assets/vector");
  config.addPassthroughCopy("assets/video");
  config.addPassthroughCopy(".nojekyll");
  config.addPassthroughCopy("CNAME");
  config.addPassthroughCopy("robots.txt");
  config.addPassthroughCopy({
    "node_modules/typeface-source-sans-pro/files/*": "files/",
  });
  config.addPassthroughCopy({
    "node_modules/typeface-libre-baskerville/files/*": "files/",
  });
  config.addPassthroughCopy({
    "node_modules/typeface-source-code-pro/files/*": "files/",
  });
  // Remove stale cache.
  config.on("beforeWatch", (files) =>
    files.forEach((file) => {
      if (file.endsWith(".js")) {
        delete require.cache[require.resolve(file)];
      }
    })
  );
  const templates = {};
  config.addTemplateFormats("acutis");
  config.addExtension("acutis", {
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
        )
      ),
    compile: (src, inputPath) => (data) => {
      try {
        const template = compile(src, inputPath);
        const render = renderContextAsync(templates);
        return template(render, data, {});
      } catch (e) {
        console.error(errorMessage(e));
        return "";
      }
    },
  });
  config.setLibrary(
    "md",
    require("markdown-it")({
      html: true,
      breaks: false,
      linkify: true,
    })
      .use(require("markdown-it-footnote"))
      .use(mdImages)
  );
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
