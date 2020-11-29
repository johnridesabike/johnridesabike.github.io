module.exports = () => ({
  plugins: [
    require("postcss-import"),
    require("postcss-custom-properties")({
      importFrom: "style.css",
    }),
    require("postcss-custom-media"),
    require("cssnano")({
      preset: "default",
    }),
  ],
});
