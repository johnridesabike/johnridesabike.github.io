const { Compile } = require("acutis-lang");
const { icons } = require("feather-icons");
const fs = require("fs").promises;
const path = require("path");
const { makeImg } = require("../_11ty/img");

const formatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
});

module.exports.DateFormat = (env, { date }, _children) =>
  env.return(formatter.format(date));

const astDateHTML = Compile.makeAst(
  `
  <time datetime="{{ dateJSON }}">
    {{ Children }}
  </time>
  `,
  "DateHTML"
);

module.exports.DateHTML = (env, { date }, children) =>
  env.render(
    astDateHTML,
    {
      dateJSON: date.toJSON(),
    },
    children
  );

module.exports.Feather = (env, { icon }, _children) =>
  env.return(icons[icon].toSvg());

const astImg = Compile.makeAst(
  `{% match image
        with {vector: {src, width}} ~%}
      <img
        src="{{ src }}"
        alt="{{ alt }}"
        width="{{ width }}"
        {%~ match class with null %}
        {%~ with class %} class="{{ class }}"
        {%~ /match ~%}
      />
    {%~ with {images: [{url, width, height, srcset}, ...rest]} ~%}
      <img
        srcset="
          {{~ url }} 1x
          {%~ map rest
              with {url}, 0 %}, {{ url }} 1.5x
          {%~ with {url}, 1 %}, {{ url }} 2x
          {%~ with {srcset} %}, {{ srcset }}
          {%~ /map ~%}
        "
        src="{{ url }}"
        width="{{ width }}"
        height="{{ height }}"
        alt="{{ alt }}"
        {%~ match class with null %}
        {%~ with class %} class="{{ class }}"
        {%~ /match %}
        loading="lazy"
      />
    {%~ /match %}`,
  "Img"
);

module.exports.Img = (env, props, children) =>
  makeImg(props)
    .then((props) => env.render(astImg, props, children))
    .catch((e) => env.error(e.message));

const manifestPath = path.resolve(
  __dirname,
  "..",
  "_site",
  "assets",
  "manifest.json"
);

module.exports.Webpack = (env, props, _children) =>
  fs.readFile(manifestPath, { encoding: "utf8" }).then((data) => {
    const x = JSON.parse(data)[props.asset];
    if (x) {
      return env.return(x);
    } else {
      return env.error(`${props.asset} doesn't exist in the manifest.`);
    }
  });
