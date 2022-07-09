const { Compile, Typescheme, TypeschemeChildren } = require("acutis-lang");
const { icons } = require("feather-icons");
const fs = require("fs").promises;
const path = require("path");
const { makeImg } = require("../_11ty/img");

const manifestPath = path.resolve(
  __dirname,
  "..",
  "_site",
  "assets",
  "manifest.json"
);

const manifest = fs
  .readFile(manifestPath, "utf-8")
  .then((data) => JSON.parse(data));

const Ty = Typescheme;
const TyChild = TypeschemeChildren;

module.exports = [
  Compile.fromFunAsync(
    "Feather",
    Ty.make([["icon", Ty.string()]]),
    TyChild.make([]),
    ({ icon }, _children) => Promise.resolve(icons[icon].toSvg())
  ),

  /*
   * Sometimes this gets used in a markdown file, so the HTML output gets
   * parsed as markdown. This means that extra lines with indentation can
   * get parsed as a code block, which we don't want.
   */
  Compile.fromFunAsync(
    "Img",
    Ty.make([
      ["src", Ty.string()],
      ["alt", Ty.string()],
      ["class", Ty.string()],
      ["width", Ty.int()],
    ]),
    TyChild.make([]),
    (props, _children) =>
      makeImg(props)
        .then((props) => {
          const className = props["class"] ? `class="${props["class"]}"` : "";
          if (props.image.tag == "vector") {
            const { src, width } = props.image.vector;
            return Promise.resolve(`<img
              src="${src}"
              alt="${alt}"
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

  Compile.fromFunAsync(
    "Webpack",
    Ty.make([["asset", Ty.string()]]),
    TyChild.make([]),
    (props, _children) =>
      manifest.then((data) => {
        const x = data[props.asset];
        if (x) {
          return Promise.resolve(x);
        } else {
          return Promise.reject(
            `Problem with Webpack: ${props.asset} doesn't exist in the manifest.`
          );
        }
      })
  ),
];
