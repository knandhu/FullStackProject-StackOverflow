const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  module: {
     noParse: /node_modules\/quill\/dist/,
    rules: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader?modules"]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      }
    ]
  },

  
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
