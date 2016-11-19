const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['webpack-hot-middleware/client', './app/index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /.jsx?$/,
        loaders: ['eslint-loader'],
        include: path.join(__dirname, 'app')
      }
    ],
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file?name=[path][name].[hash].[ext]',
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ]
  }
};
