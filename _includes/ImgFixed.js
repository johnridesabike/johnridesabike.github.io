const path = require("path");
const Image = require("@11ty/eleventy-img");
const {makeAst} = require("acutis");

const ast = makeAst(
  `<picture>
    {%~ map stats with [format, image] ~%}
      <source
        type="image/{{ format }}"
         srcset="
          {%~ map image
              with {url}, 0 %} {{ url }} 1x,
          {% with {url}, 1 %} {{ url }} 1.5x,
          {% with {url}, 2 %} {{ url }} 2x,
          {% with {srcset}, 2 %} {{ srcset }},
          {% /map ~%}
          "
      />
    {%~ /map ~%}
    {%~ match defaultFormat with [{url, width, height, srcset}, ...rest] ~%}
      <img
        srcset="
          {{~ url }} 1x,
          {%~ map rest
             with {url}, 0 %} {{ url }} 1.5x,
          {%~ with {url}, 1 %} {{ url }} 2x,
          {%~ with {srcset} %} {{ srcset }},
          {%~ /map ~%}
        "
        src="{{ url }}"
        width="{{ width }}"
        height="{{ height }}"
        alt="{{ alt }}"
        class="{{ class }}"
        lazy
      />
    {%~ /match ~%}
  </picture>`,
  module.filename
);

const fallbackAst = makeAst(
  `<img src="{{ src }}" alt="{{ alt }}" class="{{ class }}" />`,
  module.filename
);

module.exports = function ImgFixed(render, props, children) {
  const extName = path.extname(props.src);
  if (extName === ".svg") {
    return render(fallbackAst, props, children);
  } else {
    const format = extName === ".png" ? "png" : "jpeg";
    return Image("./" + props.src, {
      widths: [props.width, props.width * 1.5, props.width * 2],
      formats: [format, "webp"],
      urlPath: "/assets/images/",
      outputDir: "./_site/assets/images/",
    }).then((stats) => {
      let defaultFormat = stats[format];
      return render(
        ast,
        {
          stats: Object.entries(stats),
          alt: props.alt,
          class: props.class,
          defaultFormat: defaultFormat,
        },
        children
      );
    });
  }
};
