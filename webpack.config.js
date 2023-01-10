import path from 'path';

module.exports = {
  entry: {
    dev: './src/index.tsx',
  },
  output: {
    path: path.join(__dirname, 'scripts'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    loaders: [
      // Typescript
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
  node: {
    console: 'true',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
