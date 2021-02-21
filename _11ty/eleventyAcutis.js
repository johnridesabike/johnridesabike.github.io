const path = require("path");
const fs = require("fs");
const util = require("util");
const fastGlob = require("fast-glob");
const { Compile, Environment, Result, Source } = require("acutis-lang");
const { filenameToComponent } = require("acutis-lang/node-utils");

const readFile = util.promisify(fs.readFile);

function onComponentsError(e) {
  console.error(e);
  throw new Error(
    "I couldn't compile Acutis components due to the previous errors."
  );
}

module.exports = function (eleventyConfig, config) {
  let env = Environment.Async.make(Compile.emptyMap);
  eleventyConfig.addTemplateFormats("acutis");
  eleventyConfig.addExtension("acutis", {
    read: true,
    data: true,
    init: async function () {
      const glob = path.join(
        this.config.inputDir,
        this.config.dir.includes,
        "**/*.acutis"
      );
      const files = await fastGlob(glob);
      const queue = await Promise.all(
        files.map(async (fileName) => {
          const str = await readFile(fileName, "utf-8");
          const name = filenameToComponent(fileName);
          return Source.string(name, str);
        })
      );
      const componentsResult = Compile.fromArray([
        ...queue,
        ...config.components,
      ]);
      const components = Result.getOrElse(componentsResult, onComponentsError);
      env = Environment.Async.make(components);
    },
    compile: function (str, inputPath) {
      function onError(e) {
        console.error(e);
        throw new Error(
          `I couldn't render ${inputPath} due to the previous errors.`
        );
      }
      return async function (data) {
        const src = Source.string(inputPath, str);
        const template = Result.getOrElse(Compile.make(src), onError);
        const result = await template(env, data, {});
        return Result.getOrElse(result, onError);
      };
    },
  });
};
