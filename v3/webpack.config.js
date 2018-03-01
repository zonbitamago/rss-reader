const path = require("path");

module.exports = {
  entry: {
    app: "./src/react/init.jsx"
  },
  output: {
    filename: "./src/[name].bundle.js",
    path: path.resolve(".")
  },
  target: "electron-main",
  module: {
    rules: [
      {
        test: /\.(jsx|js)/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src/react"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"],
            plugins: [
              [
                "lodash",
                {
                  id: ["lodash", "semantic-ui-react"]
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        loader: [
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png)$/,
        loader:
          "file-loader?name=semantic/dist/themes/default/assets/fonts/[name].[ext]"
      }
    ]
  }
};
