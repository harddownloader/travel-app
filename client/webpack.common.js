const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'dist'),
		clean: true,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@': path.join(__dirname, 'src'),
			// '@assets': path.join(__dirname, 'src/assets/'),
			// '@component': path.join(__dirname, 'src/component/'),
			// '@pages': path.join(__dirname, 'src/pages/'),
			// '@style': path.join(__dirname, 'src/script/styles-tw/'),
		},
	},

	plugins: [
		new ESLintPlugin({
			extensions: ['.js', '.ts', '.tsx', 'jsx'],
		}),
		new ForkTsCheckerWebpackPlugin({ async: false }),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html',
			favicon: './public/favicon.ico',
		}),
	],
	module: {
		rules: [
			{
				test: /\/.html$/,
				type: 'asset/resource',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			},
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(mp3|wav)$/,
				use: 'file-loader',
				//?  попробовать так
				// 	type: 'asset/resource',
				// generator: {
				// 	filename: './assets/fonts/[hash][ext][query]',
				// },
			},
			{
				test: /\.(png|jpg|gif|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: './assets/images/[hash][ext][query]',
				},
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				type: 'asset/resource',
				generator: {
					filename: './assets/fonts/[hash][ext][query]',
				},
			},
			{
				test: /\.svg$/,
				//	type: 'asset/resource',
				use: ['@svgr/webpack'],
			},
		],
	},
}
