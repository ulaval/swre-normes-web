// Require modules and plugins
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');

// Define a constant that expects a directoryPattern and a fileExtension
// const mapFilenamesToEntries = (directoryPattern, fileExtension) => glob
//   .sync(directoryPattern)
//   .reduce((entries, filename) => {
// 	const regex = new RegExp('([^/]+)\.' + fileExtension + '$');
//     const [, name] = './' + filename.match(regex);
//     return { ...entries, [name]: filename }
//   }, {})

// Define a constant that expects a directoryPattern and a fileExtension to find all matching files in a folder
const mapFilenamesToEntries = function(directoryPattern, fileExtension) {
  return glob.sync(directoryPattern).reduce(function(entries, filename) {
    const regex = new RegExp('([^/]+)\.' + fileExtension + '$');
    const matches = filename.match(regex);
    const name = matches[1];
    entries[name] = './' + filename;
    return entries;
  }, {});
}

// Define the JS configuration
const jsConfig = {

  // Define the entry points for the JS configuration
  entry: {
	...mapFilenamesToEntries('./src/js/*.js', 'js')
  },

  // Define the output for the JS configuration
  output: {

	// Export the output JS files to the /assets/js folder
	path: path.resolve(__dirname, './assets/js'),

	// Keep the same output name from the input file
	filename: "[name].js"
  },

  // Define the rules for the JS configuration
  module: {
    rules: [
      {

		// Regex to match JS files
        test: /\.js$/,

        // Only include files in the src directory and its subdirectories
        include: path.resolve(__dirname, 'src'),

        // Use these loaders to compile JS files
        use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env']
			}
		}
      }
    ]
  }
};

// Define the CSS configuration
const cssConfig = {

  // Define the entry points for your CSS configuration
  entry: {
	...mapFilenamesToEntries('./src/scss/*.scss', 'scss')
  },

  // Export the output files (.js) to the /assets/tmp folder
  output: {

	  // Keep the same output name from the input file
	  path: path.resolve(__dirname, './assets/tmp'),

	  // The .js file for the css files will be cleanup later
	  filename: "[name].js"
  },

  // Define the rules for the CSS configuration
  module: {
    rules: [
      {

		// Regex to match SASS, SCSS and CSS files
        test: /\.(sa|sc|c)ss$/,

        // Only include files in the src directory and its subdirectories
        include: path.resolve(__dirname, 'src'),

        // Use these loaders to compile SASS, SCSS and CSS files
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
		  {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require.resolve("sass"),
            },
          },
        ]
      }
    ]
  },

  // Define the plugins used for the CSS configuration
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};

// Export both configurations as an array
module.exports = [jsConfig, cssConfig];