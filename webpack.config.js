// webpack.config.js
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'shapes.js',
    libraryTarget: 'umd',
    globalObject: 'this',
//    libraryExport: 'default',
    library: 'shapes'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist|build)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react' 
  }
};
