module.exports = {
	entry: './js/gutenberg-blocks-rich-snippets.js',
	output: {
		path: __dirname,
		filename: 'js/gutenberg-blocks-rich-snippets.build.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};