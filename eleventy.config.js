import path from "node:path";
import Image from "@11ty/eleventy-img";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import htmlmin from "html-minifier";
import markdownItToc from "markdown-it-table-of-contents";
import markdownItFootnote from "markdown-it-footnote";
import markdownItImplicitFigures from "markdown-it-implicit-figures";
import * as acutis from "acutis-lang/eleventy";
import * as acutisComponents from "./_includes/acutisComponents.js";

async function acutisSyntax(Prism) {
  // Make sure markup-templating is loaded.
  await import("prismjs/components/prism-markup-templating.js");

  Prism.languages.acutis = {
    comment: /^{\*[\s\S]*?\*}$/,
    delimiter: {
      pattern: /^{[{%]|[}%]}$/,
      alias: "punctuation",
    },
    string: {
      pattern: /(")(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true,
    },
    component: {
      pattern: /\b([A-Z])([a-zA-Z0-9_]+)?/,
      alias: "function",
    },
    tag: {
      pattern: /(@)([a-z_])([a-zA-Z0-9_]+)?/,
      alias: "operator",
    },
    formatter: {
      pattern: /%(,)?(\.[0-9]+)?[a-z]/,
      alias: "function",
    },
    keyword: /(\/{0,1})\b(?:match|map|map_dict|with|interface)\b/,
    operator: /\?|#|~|!|@/,
    number: /(-|\+)?\s*[0-9]+(\.[0-9]+)?(e|E)?/,
    boolean: /\b(false|true|null)\b/,
    variable: /([a-z_])([a-zA-Z0-9_]+)?/,
    punctuation: /[{}[\],.:/=()<>|]/,
  };

  var pattern = /{({?)%[\s\S]*?%(}?)}|{\*[\s\S]*?\*}/g;
  var markupTemplating = Prism.languages["markup-templating"];

  Prism.hooks.add("before-tokenize", (env) =>
    markupTemplating.buildPlaceholders(env, "acutis", pattern),
  );
  Prism.hooks.add("after-tokenize", (env) =>
    markupTemplating.tokenizePlaceholders(env, "acutis"),
  );
}

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

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/attachments");
  eleventyConfig.addPassthroughCopy("assets/vector");
  eleventyConfig.addPassthroughCopy("assets/video");
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy(".nojekyll");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPlugin(acutis.plugin, { components: acutisComponents });
  eleventyConfig.addPlugin(syntaxHighlight, {
    init: ({ Prism }) => acutisSyntax(Prism),
  });
  eleventyConfig.amendLibrary("md", (md) =>
    md
      .set({
        html: true,
        breaks: false,
        linkify: true,
        typographer: true,
      })
      .use(markdownItFootnote)
      .use(mdImages)
      .use(markdownItImplicitFigures, { figcaption: true })
      .use(markdownItToc, {
        containerHeaderHtml: `<details open><summary class="toc-container-header">Contents</summary>`,
        containerFooterHtml: `</details>`,
        listType: "ol",
        includeLevel: [1, 2],
      }),
  );

  if (process.env.ELEVENTY_ENV === "production") {
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
      // Eleventy 1.0+: use this.inputPath and this.outputPath instead
      if (outputPath && outputPath.endsWith(".html")) {
        try {
          let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
          });
          return minified;
        } catch (e) {
          console.log("minifier failed!", outputPath);
          console.log(e.message.slice(0, 500));
          return "";
        }
      } else {
        return content;
      }
    });
  }
  eleventyConfig.addWatchTarget("./assets/**/*");
  return {
    templateFormats: ["md", "acutis", "11ty.js"],
    markdownTemplateEngine: "acutis",
    htmlTemplateEngine: "acutis",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
}
