const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.config.js");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.optimize.AggressiveSplittingPlugin({
      minSize: 50000,
      maxSize: 80000,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块（实现CSS-Module）
        ],
      },
    ],
  },
});
