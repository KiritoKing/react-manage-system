const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rootPath = process.cwd();
const fe = path.resolve(rootPath, "fe");
const entry = path.resolve(fe, "src/index.tsx");

module.exports = {
  entry,
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.resolve(fe, "build"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    modules: [path.resolve(fe, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, "static/index.html"),
      filename: "index.html",
    }),
  ],
};