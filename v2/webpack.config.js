const path = require('path');
const webpack = require("webpack");
const PROD = JSON.stringify(process.env.NODE_ENV === "production");

module.exports = {
  entry: './src/react/init.jsx',
  output: {
    filename: './src/bundle.js'
  },
  plugins: PROD == 'true'
    ? [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
    : [new webpack.optimize.UglifyJsPlugin()],
  target: "electron-main",
  devtool: '#inline-source-map',
  cache: true,
  module: {
    rules: [
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015', 'react'
            ],
            "plugins": [
              [
                "lodash", {
                  "id": ["lodash", "semantic-ui-react"]
                }
              ]
            ]
          }
        }
      }, {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
      }, {
        test: /\.(eot|svg|ttf|woff|woff2|png)$/,
        loader: 'file-loader?name=semantic/dist/themes/default/assets/fonts/[name].[ext]'
      }
    ]
  }
};
