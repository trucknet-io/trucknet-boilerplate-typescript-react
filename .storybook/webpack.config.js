const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          transpileOnly: true,
        },
      },
    ],
  });
  config.resolve.extensions.unshift(".ts", ".tsx");
  config.resolve.plugins = [new TsconfigPathsPlugin()];
  return config;
};
