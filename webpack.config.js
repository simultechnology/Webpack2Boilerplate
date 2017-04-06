const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader']
        })
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    port: 18080,
    inline: true,
    historyApiFallback: true,
  },
};
