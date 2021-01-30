const path = require('path')
module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'bundle.js'
  },
  mode: 'none',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-syntax-jsx']
        }
      }
    }]
  }
};