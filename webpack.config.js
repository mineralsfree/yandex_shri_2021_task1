const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg)$/i,
        use: [
          {
            options: {
              outputPath: 'assets',
            },
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src/assets/images'),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "stories.js"
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, "src", "stories.js")],
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.gif",
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html"
    })
  ],
}
