const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const WebpackBar = require("webpackbar");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config");

module.exports = ({ config }) => {
  config.module.rules = config.module.rules.filter(
    (r) => r.test.toString() !== /\.md$/.toString(),
  );
  config.plugins = config.plugins.filter(
    (m) => m instanceof webpack.ProgressPlugin === false,
  ); // We are using Webpackbar, so no need in ProgressPlugin
  config.plugins.push(new HardSourceWebpackPlugin());
  config.plugins.push(new WebpackBar());
  config.plugins = config.plugins.concat(
    webpackConfig.plugins.filter(
      (p) => p instanceof webpack.ContextReplacementPlugin === true,
    ),
  );

  config.resolve.plugins = [new TsconfigPathsPlugin()];
  config.resolve.extensions.unshift(".ts", ".tsx");

  const rules = [
    {
      test: /\.(j|t)sx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    },
    {
      test: /\.md$/,
      exclude: /README\.md/,
      use: [
        {
          loader: require.resolve("html-loader"),
        },
        {
          loader: require.resolve("markdown-loader"),
        },
      ],
    },
    {
      test: /README\.md$/,
      use: [
        {
          loader: require.resolve("raw-loader"),
        },
      ],
    },
  ];

  config.module.rules = [...rules, ...config.module.rules];

  return config;
};
