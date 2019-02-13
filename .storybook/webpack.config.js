const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const WebpackBar = require("webpackbar");
const ProgressPlugin = require("webpack").ProgressPlugin;

module.exports = (baseConfig, env, config) => {
  config.plugins = config.plugins.filter(
    (m) => m instanceof ProgressPlugin === false,
  ); // We are using Webpackbar, so no need in ProgressPlugin
  config.plugins.push(new HardSourceWebpackPlugin());
  config.plugins.push(new WebpackBar());
  config.resolve.plugins = [new TsconfigPathsPlugin()];

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          transpileOnly: true,
          useCache: true,
        },
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  });

  config.resolve.extensions.unshift(".ts", ".tsx");
  return config;
};
