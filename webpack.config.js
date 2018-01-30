const path = require('path');

module.exports = {
	entry: './src/index.ts',
	devtool: 'source-map',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
    contentBase: './dist'
  },
	module: {
		rules: [
		{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
		{
			test: /\.scss$/,
				use: [
					{
						loader: "style-loader" // creates style nodes from JS strings
					}, 
					{
						loader: "css-loader", 
						options: {
							sourceMap: true
						}
					}, 
					{
					loader: "sass-loader", 
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	}
};