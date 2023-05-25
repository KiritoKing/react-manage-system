const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");

const rootPath = process.cwd();
const fe = path.resolve(rootPath, "fe");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(rootPath, "static"),
    },
    port: 9000,
    compress: true,
    allowedHosts: "127.0.0.1",
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:9001",
    },
  },
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
