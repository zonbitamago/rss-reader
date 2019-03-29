const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: { app: "./src/react/init.js" },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "src")
  },
  // electronが上手くスプリットできない
  // optimization: {
  //   splitChunks: {
  //     name: "common",
  //     chunks: "initial"
  //   }
  // },
  target: "electron-main",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                [
                  "@babel/plugin-proposal-decorators",
                  {
                    legacy: true
                  }
                ],
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-syntax-import-meta",
                ["@babel/plugin-proposal-class-properties", { loose: true }],
                "@babel/plugin-proposal-json-strings",
                "@babel/plugin-proposal-function-sent",
                "@babel/plugin-proposal-export-namespace-from",
                "@babel/plugin-proposal-numeric-separator",
                "@babel/plugin-proposal-throw-expressions",
                "@babel/plugin-proposal-export-default-from",
                "@babel/plugin-proposal-logical-assignment-operators",
                "@babel/plugin-proposal-optional-chaining",
                [
                  "@babel/plugin-proposal-pipeline-operator",
                  {
                    proposal: "minimal"
                  }
                ],
                "@babel/plugin-proposal-nullish-coalescing-operator",
                "@babel/plugin-proposal-do-expressions",
                "@babel/plugin-proposal-function-bind"
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", { loader: "css-loader", options: { url: false } }]
      }
    ]
  }
};
