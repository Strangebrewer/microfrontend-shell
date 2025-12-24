import type { Configuration } from 'webpack';
import { container } from 'webpack';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config: Configuration = {
  mode: 'development',
  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
    clean: true,
    uniqueName: 'shell',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    new container.ModuleFederationPlugin({
      name: 'shell',

      remotes: {
        'mfe-app-one': 'app1@http://localhost:3001/remoteEntry.js',
        'mfe-app-two': 'app2@http://localhost:3002/remoteEntry.js',
      },

      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: '^19.2.3',
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '^19.2.3',
        },
      },
    }),
  ],

  devServer: {
    port: 3000,
    hot: false,
    historyApiFallback: true,
  },
};

export default config;
