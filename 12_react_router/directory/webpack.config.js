const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'client'),
  entry: [
    'webpack-hot-middleware/client?__webpack_hmr&timeout=20000&reload=true',
    './app'
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/app.bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
