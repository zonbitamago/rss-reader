const path = require('path');

module.exports = {
  entry: './src/react/my-app.jsx',
  output: {
    filename: './src/bundle.js'
    // ,libraryTarget: 'commonjs2'
  },
  target: "electron",
  // node: {
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty'
  // },
  // externals: ['fs'],
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
      }
    ]
  }
};
