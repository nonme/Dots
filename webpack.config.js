const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const buildDirectory = "dist";
const outputDirectory = buildDirectory + "/client";

module.exports = {
  mode: "development",
  entry: "./src/client/index.tsx",
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, buildDirectory)],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
