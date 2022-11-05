const { Component, Typescheme } = require("acutis-lang");
const { icons } = require("feather-icons");
const path = require("path");
const Image = require("@11ty/eleventy-img");

function makeImg(props) {
  const extName = path.extname(props.src).toLowerCase();
  let format;
  switch (extName) {
    case ".jpg":
    case ".jpeg":
    case ".tiff":
    case ".raw":
    case ".webp":
      format = "jpeg";
      break;
    case ".svg":
      format = "svg";
      break;
    case ".png":
      format = "png";
      break;
    default:
      format = null;
      break;
  }
  if (format === null) {
    props.image = {
      tag: "vector",
      vector: { src: props.src, width: props.width },
    };
    return Promise.resolve(props);
  } else {
    return Image("./" + props.src, {
      widths: [props.width, props.width * 1.5, props.width * 2],
      formats: [format],
      urlPath: "/assets/images/minified/",
      outputDir: path.join(".", "_site", "assets", "images", "minified"),
    }).then((stats) => {
      props.image = { tag: "image", images: stats[format] };
      return props;
    });
  }
}

const Ty = Typescheme;

module.exports = [
  Component.funAsync("Feather", Ty.make([["icon", Ty.string()]]), ({ icon }) =>
    Promise.resolve(icons[icon].toSvg())
  ),

  /*
   * Sometimes this gets used in a markdown file, so the HTML output gets
   * parsed as markdown. This means that extra lines with indentation can
   * get parsed as a code block, which we don't want.
   */
  Component.funAsync(
    "Img",
    Ty.make([
      ["src", Ty.string()],
      ["alt", Ty.string()],
      ["class", Ty.string()],
      ["width", Ty.int()],
    ]),
    (props) =>
      makeImg(props)
        .then((props) => {
          const className = props["class"] ? `class="${props["class"]}"` : "";
          if (props.image.tag == "vector") {
            const { src, width } = props.image.vector;
            return Promise.resolve(`<img
              src="${src}"
              alt="${props.alt}"
              width="${width}"
              ${className} />`);
          } else {
            const [{ url, width, height }, ...rest] = props.image.images;
            const srcset = rest
              .map(({ url, srcset }, i) => {
                switch (i) {
                  case 0:
                    return `, ${url} 1.5x`;
                  case 1:
                    return `, ${url} 2x`;
                  default:
                    return `, ${srcset}`;
                }
              })
              .join("");
            return Promise.resolve(`<img
              srcset="${url} 1x${srcset}"
              src="${url}"
              width="${width}"
              height="${height}"
              alt="${props.alt}" ${className} loading="lazy"
            />`);
          }
        })
        .catch((e) =>
          Promise.reject(new Error("Problem with Img: " + e.message))
        )
  ),
];
