const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css',
		}),
	],
})
