/* uncomment the following block and the respective line within the plugins section for the webpack config to get this working
*/
// const WebpackShellPlugin = require('webpack-shell-plugin');
// Current build path represents where the file needs to go to
// var MOVE_FILE_TO = 'Y:/marsjs/js/build/CustomizeTable/distribute/';
// var RECOMPILE_ON_THIS_FILE = MOVE_FILE_TO + '/bundle.js';
// var shellCommand2 = 'mv ./dist/bundle.js ' + MOVE_FILE_TO;
// var _onBuildEnd = shellCommand2;

const webpack = require('webpack'); //this is used for a production build

module.exports = {
  entry: './js/index.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'stage-0', 'react'],
            }
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=roboto/[name].[ext]'
        }
        // {
        //     test: /\.css$/,
        //     loader: 'css-loader',
        //     // query: {
        //     //   modules: true,
        //     //   localIdentName: '[name]__[local]__[hash:base64:5]'
        //     // }
        // },        
        // {
        //     test: /\.css$/,
        //     loader: 'style-loader'
        // }
    ]
  },
	plugins: [
	// 	// new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:['echo "Webpack End"']})
	// 	new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:[_onBuildEnd]})
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		NODE_ENV: JSON.stringify('production')
		// 	}
		// }),
		// new webpack.optimize.UglifyJsPlugin()
  ]
  
}
