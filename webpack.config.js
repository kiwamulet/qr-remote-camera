const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { LicenseWebpackPlugin } = require("license-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    index: "./src/index.tsx",
    camera: "./src/camera.tsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
    extensions: [".ts", ".js", ".tsx"],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      title: "Monitor (QR-RTC)",
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      title: "Camera (QR-RTC)",
      chunks: ["camera"],
      filename: "camera",
    }),
    new LicenseWebpackPlugin({
      addBanner: true,
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    inline: true,
    watchContentBase: true,
    open: "Google Chrome",
    openPage: "index.html",
  },
};
