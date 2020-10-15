module.exports = () => ({
  plugins: [
    require("postcss-custom-properties")({
      importFrom: `${__dirname}/src/style.css`,
    }),
  ],
});