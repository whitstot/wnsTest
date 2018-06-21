var path = require('path');
const webpack = require('webpack'); 

module.exports = {
  entry: './js/index.js',
  output: {
    filename: './dist/bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [ 'style-loader' , 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 8000
  }
};