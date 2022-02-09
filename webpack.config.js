const webpack = require("webpack");
const path = require("path");

const paths = {
  src: path.join(__dirname, "src"),
};

module.exports = {
  mode: "development",
  stats: "normal",
  devServer: {
    static: "./public",
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  entry: {
    index: "index",
  },
  output: {
    filename: "[name].js",
  },
  resolve: {
    modules: [paths.src, "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: [paths.src],
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin()],
};
