import type { Configuration } from 'webpack';
import webpack from 'webpack';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { createWebpackConfig, defaultShared } from '@bka-stuff/mfe-utils';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  ...createWebpackConfig({
    appName: 'shell',
    resolve: path.resolve,
    _dirname: __dirname,
    port: 3000,
    publicPath: '/',
  }),

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    new webpack.container.ModuleFederationPlugin({
      name: 'shell',

      remotes: {
        'mfe-dashboard': 'mfe_dashboard@http://localhost:3001/remoteEntry.js',
        'mfe-job-search': 'mfe_job_search@http://localhost:3002/remoteEntry.js',
      },

      shared: defaultShared,
    }),
  ]
} as Configuration;

export default config;
