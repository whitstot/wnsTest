var path = require('path');
//const webpack = require('webpack');
//const json = require('./file.json');              //might need this in the future, possibly put in index.js?
//const json = require('json-loader!./file.json');  //might need this in the future, possibly put in index.js? 
//var React = require('react');                     //might need this later

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
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