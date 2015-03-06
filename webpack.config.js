var webpack = require('webpack');

var plugins = [
  // require 'react/addons' when we require 'react'
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons'),
  new webpack.optimize.CommonsChunkPlugin("vendor.bundle.js", 2),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }));
}

var config = {
  cache: true,
  entry: [
    'webpack/hot/only-dev-server',
    "./client/index.jsx"
  ],
  output: {
    path: __dirname + "/public/js",
    filename: "[name].bundle.js",
    publicPath: "/js/"
  },
  // devtool: "#inline-source-map",
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ }
    ]
  },
  plugins: plugins
};

module.exports = config;