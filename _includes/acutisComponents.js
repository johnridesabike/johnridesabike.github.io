import path from "node:path";
import Image from "@11ty/eleventy-img";
import { icons } from "feather-icons";

export function Feather({ icon }) {
  return icons[icon].toSvg({ "aria-hidden": "true" });
}
Feather.interface = { icon: "string" };

/*
 * Sometimes this gets used in a markdown file, so the HTML output gets
 * parsed as markdown. This means that extra lines with indentation can
 * get parsed as a code block, which we don't want.
 */
export async function Img(props) {
  try {
    let extName = path.extname(props.src).toLowerCase();
    let className = props["class"] ? props["class"] : "";
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
      return `<img
                src="${pros.src}"
                alt="${props.alt}"
                width="${pros.width}"
                class="${className}">`;
    } else {
      let stats = await Image("./" + props.src, {
        widths: [props.width, props.width * 1.5, props.width * 2],
        formats: [format],
        urlPath: "/assets/images/minified/",
        outputDir: path.join(".", "_site", "assets", "images", "minified"),
      });
      let [{ url, width, height }, ...rest] = stats[format];
      let srcset = rest
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
      return `<img
                srcset="${url} 1x${srcset}"
                src="${url}"
                width="${width}"
                height="${height}"
                alt="${props.alt}"
                class="${className}"
                loading="lazy">`;
    }
  } catch (e) {
    throw new Error("Problem with Img: " + e.message);
  }
}
Img.interface = {
  src: "string",
  alt: "string",
  class: "string",
  width: "int",
};
