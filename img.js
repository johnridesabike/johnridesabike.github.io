const path = require("path");
const Image = require("@11ty/eleventy-img");

exports.makeImg = function makeImg(props) {
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
    case ".png":
      format = "png";
      break;
    default:
      format = null;
      break;
  }
  if (format === null) {
    props.image = { vector: { src: props.src, width: props.width } };
    return Promise.resolve(props);
  } else {
    return Image("./" + props.src, {
      widths: [props.width, props.width * 1.5, props.width * 2],
      formats: [format],
      urlPath: "/assets/images/",
      outputDir: "./_site/assets/images/",
    }).then((stats) => {
      props.image = { images: stats[format] };
      return props;
    });
  }
};
