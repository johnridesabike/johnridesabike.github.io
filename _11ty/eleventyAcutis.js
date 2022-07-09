const path = require("path");
const fs = require("fs");
const util = require("util");
const fastGlob = require("fast-glob");
const { Compile, Render, Utils } = require("acutis-lang");

const readFile = util.promisify(fs.readFile);

module.exports = function (eleventyConfig, config) {
  let components = Compile.components([]);
  eleventyConfig.addTemplateFormats("acutis");
  eleventyConfig.addExtension("acutis", {
    read: true,
    data: true,
    init: function () {
      const glob = path.join(
        this.config.inputDir,
        this.config.dir.includes,
        "**/*.acutis"
      );
      return fastGlob(glob)
        .then((files) => {
          const filesp = files.map((fileName) =>
            readFile(fileName, "utf-8").then((src) => {
              const name = Utils.filenameToComponent(fileName);
              return Compile.fromString(name, src);
            })
          );
          return Promise.all(filesp);
        })
        .then((arr) => {
          components = Compile.components([...arr, ...config.components]);
        })
        .catch((e) => {
          if (Utils.isError(e)) {
            console.error(Utils.getError(e));
          } else {
            throw e;
          }
        });
    },
    compile: function (str, inputPath) {
      try {
        const template = Compile.make(inputPath, components, str);
        return function (data) {
          return Render.async(template, data).catch((e) => {
            if (Utils.isError(e)) {
              console.error(Utils.getError(e));
              return "error";
            } else {
              throw e;
            }
          });
        };
      } catch (e) {
        if (Utils.isError(e)) {
          console.error(Utils.getError(e));
          return function (_data) {
            return "error";
          };
        } else {
          throw e;
        }
      }
    },
  });
};
