const path = require("path");
const Image = require("@11ty/eleventy-img");
const {makeAst} = require("acutis");

const ast = makeAst(
  `<div
    class="{{ class }}"
    style="
      position:relative;
      overflow:hidden;
      display:inline-block;
      width: 100%;
      height: 100%;
      "
  >
  <picture>
    {% map statsArr with [format, image] %}
      <source
        type="image/{{ format }}"
        sizes="(max-width: 800px) 100vw, 800px"
         srcset="
          {%~ map image with {srcset} %} {{ srcset }}, {% /map ~%}
          "
      />
    {% /map %}
    {% match defaultImage with [{url, width, height, srcset}, ...rest] %}
      <img
        srcset="
          {{~ srcset }},
          {%~ map rest with {srcset} %} {{ srcset }}, {% /map ~%}
        "
        src="{{ url }}"
        alt="{{ alt }}"
        sizes="(max-width: 800px) 100vw, 800px"
        style="
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        "
      />
    {% /match %}
  </picture>
</div>`,
  module.filename
);

const fallbackAst = makeAst(
  `
  <img
    src="{{ src }}"
    alt="{{ alt }}"
    class="{{ class }}"
    style="
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    "
   />
`,
  module.filename
);

module.exports = function ImgFluid(render, props, children) {
  const extName = path.extname(props.src);
  if (extName === ".svg") {
    return render(fallbackAst, props, children);
  } else {
    const breakpoints = new Set();
    for (x of props.breakpoints) {
      breakpoints.add(x);
      breakpoints.add(x * 1.5);
      breakpoints.add(x * 2);
    }
    const format = extName === ".png" ? "png" : "jpeg";
    return Image("./" + props.src, {
      widths: [...breakpoints],
      formats: [format, "webp"],
      urlPath: "/assets/images/",
      outputDir: "./_site/assets/images/",
    }).then((stats) => {
      const defaultImage = stats[format];
      return render(
        ast,
        {
          statsArr: Object.entries(stats),
          stats: stats,
          alt: props.alt,
          class: props.class,
          defaultImage: defaultImage,
        },
        children
      );
    });
  }
};
