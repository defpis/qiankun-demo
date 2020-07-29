const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config.js");

module.exports = merge(webpackConfig, {
  devtool: "eval-source-map",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3001,
    contentBase: "./dist",
  },
});
