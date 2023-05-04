// Require modules and plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const fs = require("fs");
const glob = require("glob");
const path = require("path");

// Define a constant that expects a directoryPattern and a fileExtension
// Find all matching files in a folder and return it in an array
const mapFilenamesToEntries = (directoryPattern, fileExtension) =>
  glob.sync(directoryPattern).reduce((entries, filename) => {
    const regex = new RegExp("([^/]+)." + fileExtension + "$");
    const [, name] = filename.match(regex);
    return { ...entries, [name]: "./" + filename };
  }, {});

// Define the JS configuration
const jsConfig = {
  // Define the entry points for the JS configuration
  entry: {
    ...mapFilenamesToEntries("./assets/src/js/**/*.js", "js"),
  },

  // Define the output for the JS configuration
  output: {
    // Export the output JS files to the /assets/js folder
    path: path.resolve(__dirname, "./assets/js"),

    // Keep the same output name from the input file
    filename: "[name].js",
  },

  // Define the rules for the JS configuration
  module: {
    rules: [
      {
        // Regex to match JS files
        test: /\.js$/,

        // Only include files in the src directory and its subdirectories
        include: path.resolve(__dirname, "./assets/src"),

        // Use these loaders to compile JS files
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

// Define the CSS configuration
const cssConfig = {
  // Define the entry points for your CSS configuration
  entry: {
    ...mapFilenamesToEntries("./assets/src/scss/**/[^_]*.scss", "scss"),
  },

  // Export the output files (.js) to the /assets/tmp folder
  output: {
    // Keep the same output name from the input file
    path: path.resolve(__dirname, "./assets/dist/tmp"),
  },

  // Define the rules for the CSS configuration
  module: {
    rules: [
      {
        // Regex to match SASS, SCSS and CSS files
        test: /\.(sa|sc|c)ss$/,

        // Only include files in the src directory and its subdirectories
        include: path.resolve(__dirname, "./assets/src"),

        // Use these loaders to compile SASS, SCSS and CSS files
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // Avoid parsing url or image-set in CSS
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require.resolve("sass"),
            },
          },
        ],
      },
    ],
  },

  // Define the plugins used for the CSS configuration
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/[name].css",
    }),
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: [
          () => {
            fs.rmSync("./assets/dist/tmp", { recursive: true });
          },
        ],
      },
    }),
  ],
};

// Export both configurations as an array
module.exports = [jsConfig, cssConfig];
