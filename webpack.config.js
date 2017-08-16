const path = require('path');
const webpack = require("webpack");
const PROD = JSON.stringify(process.env.NODE_ENV === "production");

module.exports = {
  entry: './src/react/my-app.jsx',
  output: {
    filename: './src/bundle.js'
  },
  plugins: PROD
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
  module: {
    rules: [
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }, {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  }
};
