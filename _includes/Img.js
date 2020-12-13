const { makeAst } = require("acutis-lang");
const { makeImg } = require("../img");

const ast = makeAst(
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
      {%~ match class with null %}
      {%~ with class %} class="{{ class }}"
      {%~ /match ~%}
      loading="lazy"
    />
  {%~ /match %}`,
  module.filename
);

module.exports = (render, props, children) =>
  makeImg(props)
    .then((props) => render(ast, props, children))
    .catch((e) => {
      console.error(e);
      return "";
    });
