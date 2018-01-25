var path = require('path');
const webpack = require('webpack'); 

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 8080
  }
};