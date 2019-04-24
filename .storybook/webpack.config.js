const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const WebpackBar = require("webpackbar");
const ProgressPlugin = require("webpack").ProgressPlugin;
const filesExts = require("../config/filesExts");

module.exports = ({ config, mode }) => {
  config.module.rules = config.module.rules.filter(
    (r) => r.test.toString() !== /\.md$/.toString(),
  );
  config.plugins = config.plugins.filter(
    (m) => m instanceof ProgressPlugin === false,
  ); // We are using Webpackbar, so no need in ProgressPlugin
  config.plugins.push(new HardSourceWebpackPlugin());
  config.plugins.push(new WebpackBar());
  config.resolve.plugins = [new TsconfigPathsPlugin()];
  config.module.rules = [];
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

  config.module.rules.push({
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
  });

  config.module.rules.push({
    test: /README\.md$/,
    use: [
      {
        loader: require.resolve("raw-loader"),
      },
    ],
  });

  config.module.rules.push({
    test: new RegExp(`\.(${filesExts.join("|")})$`),
    use: [
      {
        loader: require.resolve("file-loader"),
        options: { outputPath: "assets/images" },
      },
    ],
  });

  config.resolve.extensions.unshift(".ts", ".tsx");

  return config;
};
