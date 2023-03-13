const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const fs = require('fs');
const path = require('path');
const { globSync } = require('glob')

// Common Configuration
var config = {
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							//sourceMap: true,
							url: false,
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								//outputStyle: 'compressed',
								sourceMap: true,
							},
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							emitFile: false, // Éviter que les fichiers soient copiés dans le dossier "build". On gére le tout manuellement.
							name: '[path][name].[ext]', // Conserver le nom des fichiers.
						},
					},
				],
			},
			// {
			// 	test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
			// 	use: [
			// 	  {
			// 		loader: 'file-loader',
			// 		options: {
			// 		  name: '[name].[ext]',
			// 		  outputPath: 'fonts/'
			// 		}
			// 	  }
			// 	]
			// },
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					// options: {
					// 	//plugins: ['lodash'],
					// 	presets: [
					// 		["@babel/preset-env", {
					// 			"targets": {
					// 				"browsers": [
					// 					"last 2 versions"
					// 				]
					// 			},
					// 			"useBuiltIns": "usage",
					// 			"corejs": "3"
					// 		}]
					// 	],
					// 	"plugins": [
					// 	],
					// 	cacheDirectory: true
					// }
				}
			}
			// Linting JavaScript à l'enregistrement des fichiers
			/*{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},*/
		],
	},
};

// CSS Configuration
var cssConfig = Object.assign({}, config, {
    name: "css",
    entry:
		globSync('./src/scss/**/[^_]*.scss').reduce(function(obj, el){
			obj[path.parse(el).name] = './' + el;
			return obj
		},{}),
    output: {
      path: path.resolve(__dirname, 'assets/tmp'),
      },
	plugins: [
		new MiniCssExtractPlugin({
			filename: '../../assets/css/[name].css',
		}),
		// Linting CSS
		new StylelintPlugin({
			lintDirtyModulesOnly: true,
			failOnError: false,
			failOnWarning: false,
		}),
		new WebpackShellPluginNext({
            onBuildEnd: {
                scripts: [
                    () => {
                        fs.rmSync("./assets/tmp", { recursive: true });
                    }
                ]
            }
        })
	],
});

// JS Configuration
var jsConfig = Object.assign({}, config,{
	name: "js",
	entry:
		globSync('./src/js/**.js').reduce(function(obj, el){
			obj[path.parse(el).name] = './' + el;
			return obj
		},{}),
	output: {
		path: path.resolve(__dirname, './assets/js'),
		filename: "[name].js"
	},
});

// Return Array of Configurations
module.exports = [
	cssConfig, jsConfig,
];



