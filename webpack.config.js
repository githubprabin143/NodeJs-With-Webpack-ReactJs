const path = require("path");
const webpack = require("webpack");

const config = {
  entry: "./resources/src/index.js",

  output: {
    path: __dirname + "/public/",
    filename: "static/js/index.js",
    libraryTarget:'var',
    library:'EntryPoint'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js",".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "static/fonts/[name].[contenthash].[ext]"
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/images/[name].[contenthash].[ext]"
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
