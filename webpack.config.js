const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: ['file-loader']
    },{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },{
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(jpe?g|png|svg)$/,
      use: ['file-loader']
    }]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          sourceMap: true,
          compress: {
            warnings: false,
          },
        }
      }),
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

module.exports = config;
