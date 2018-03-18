import * as webpack from 'webpack';
import * as path from 'path';

export default {
  entry: {
    app: './app.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{ 
      test: /(\.jsx?)|(\.tsx?)$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
    }, {
      test: /.css$/,
      exclude: /node_modules/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
      ]
    }],
  },
  devtool: 'cheap-module-source-map',
  stats: 'minimal',
} as webpack.Configuration;
