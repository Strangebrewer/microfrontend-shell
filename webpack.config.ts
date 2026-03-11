import type { Configuration } from 'webpack';
// import { container } from 'webpack';
import webpack from 'webpack';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Configuration = {
  mode: 'development',
  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, "tsconfig.json"),
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      }
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    symlinks: true,
    alias: {
      axios: path.resolve(__dirname, "node_modules/axios"),
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
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

    new webpack.container.ModuleFederationPlugin({
      name: 'shell',

      remotes: {
        'mfe-app-one': 'mfe_app_one@http://localhost:3001/remoteEntry.js',
        'mfe-app-two': 'mfe_app_two@http://localhost:3002/remoteEntry.js',
      },

      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true },
        "@tanstack/react-query": { singleton: true },
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
