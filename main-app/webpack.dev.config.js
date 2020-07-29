const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config.js");

module.exports = merge(webpackConfig, {
  devtool: "eval-source-map",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    contentBase: "./dist",
  },
});
