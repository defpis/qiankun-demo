const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const packageName = require("./package.json").name;

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  resolve: {
    extensions: [".jsx", ".js"],
  },
  output: {
    filename: "[name].[hash].js",
    path: path.join(__dirname, "./dist"),
    library: `${packageName}-[name]`,
    libraryTarget: "umd",
    jsonpFunction: `webpackJsonp_${packageName}`,
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
