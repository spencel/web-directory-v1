const webpack = require( 'webpack' )
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );

const outputDirectory = 'dist';

module.exports = {
	entry: {
		'webDirectory': './src/client/web-directory/index.js',
		'index': './src/client/web-directory/index.js',
	},
	output: {
		path: path.resolve( __dirname, outputDirectory ),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(css)$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(html)$/,
				use: [{
					loader: 'html-loader',
					options: {
						minimize: true,
						removeComments: true,
						collapseWhitespace: true,
						attrs: false,
					}
				}],
			}
		]
	},
	devServer: {
		port: 3000,
		open: true,
		proxy: {
			'/api': 'http://localhost:8080'
		}
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: 'commons',
					chunks: 'initial',
					minChunks: 2,
					minSize: 0
				},
			},
		},
		occurrenceOrder: true, // To keep filename consistent between different modes (for example building only)
	},
	plugins: [
		new CleanWebpackPlugin([ outputDirectory ]),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'Index',
			chunks: [ 'index' ],
		}),
		new HtmlWebpackPlugin({
			filename: 'web-directory.html',
			title: 'Web Directory',
			chunks: [ 'webDirectory' ],
		}),
	],
};
