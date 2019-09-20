const path = require('path');
const webpack = require('webpack');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		register: './src/register.js',
		recuperarcontrasenia: './src/recuperarcontrasenia.js',
		profile: './src/profile.js'
	},

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new CopyWebpackPlugin([{     from:'./src/assets/images',      to:'assets/images'   }]),
		new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          title: 'index',
          // Load a custom template (lodash by default)
		  template: './src/index.html',
		  chunks : ['index'],
		  filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			title: 'Register',
			// Load a custom template (lodash by default)
			template: './src/register.html',
			chunks : ['register'],
			filename: 'register.html'
		  }),
		  new HtmlWebpackPlugin({
			title: 'recuperarcontrasenia',
			// Load a custom template (lodash by default)
			template: './src/recuperarcontrasenia.html',
			chunks : ['recuperarcontrasenia'],
			filename: 'recuperarcontrasenia.html'
		  }),
		  new HtmlWebpackPlugin({
			title: 'profile',
			// Load a custom template (lodash by default)
			template: './src/profile.html',
			chunks : ['profile'],
			filename: 'profile.html'
		  })
      ],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			},
			{                
				test: [/.css$/],                
				use:[                    
				 'style-loader',                  
				 'css-loader'
				]            
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
				  {
					loader: 'file-loader',
					options: {
					  name: '[name].[ext]',
					  outputPath: 'assets/images'
					}
				  }
				]
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true
	}
};
