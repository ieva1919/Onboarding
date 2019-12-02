const { readdirSync } = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const getDirectories = source =>
	readdirSync(source, { withFileTypes: true })
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name)

const modules = getDirectories('./src')

module.exports = {
	entry: modules.reduce((prev, curr) => ({ ...prev, [curr]: `./src/${curr}/main.js` }), {}),
	output: { filename: '[name]/main.[hash].js' },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				loader: 'file-loader',
				options: {
					outputPath: url => {
						return `./assets/${url}`
					}
				}
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader?attrs[]=img:src&attrs[]=source:srcset'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			chunks: []
		}),
		...modules.map(
			mod =>
				new HtmlWebpackPlugin({
					filename: `${mod}/index.html`,
					template: `src/${mod}/index.html`,
					chunks: [mod]
				})
		)
	]
}
