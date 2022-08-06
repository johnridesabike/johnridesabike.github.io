const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDev ? "development" : "production",
  stats: {
    colors: true,
    preset: "minimal",
  },
  performance: { hints: isDev ? false : "warning" },
  // Eval does not work for css source maps
  // `All values enable source map generation except eval and false value.`
  // https://github.com/webpack-contrib/css-loader
  devtool: isDev ? "cheap-module-source-map" : "source-map",
  entry: [path.resolve(__dirname, "assets", "style.css")],
  output: {
    filename: isDev ? "[name].js" : "[name].[contenthash].js",
    path: path.resolve(__dirname, "_site/", "assets"),
    publicPath: "/assets/",
  },
  plugins: [
    // new ESBuildPlugin(),
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? "[name].css" : "[name].[contenthash].css",
    }),
  ],
  optimization: isDev
    ? {}
    : {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
  module: {
    rules: [
      {
        test: /\.s?css/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env", "postcss-custom-media"],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: `fonts/${isDev ? "[name][ext]" : "[contenthash][ext]"}`,
        },
      },
    ],
  },
  resolve: {},
};
