const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
exports.getParameters = function(str){
  const argv = process.argv
  const result = argv.find(item => item.match(str))
  if (result) {
    return result.split('=')[1]
  }
  return null
}
const argMode = this.getParameters('--mode');
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: argMode === 'development' ? path.resolve(__dirname, "daily") : path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?j(s|sx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", {}]],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", {}]],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
