const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*.html", "src/**/*.scss"],
  },
  output: {
    filename: "./js/[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s(a|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
