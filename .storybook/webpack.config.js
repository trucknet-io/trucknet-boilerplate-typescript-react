const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const WebpackBar = require("webpackbar");
const ProgressPlugin = require("webpack").ProgressPlugin;
const filesExts = require("../config/filesExts");

module.exports = (baseConfig, env) => {
  baseConfig.module.rules = baseConfig.module.rules.filter(
    (r) => r.test.toString() !== /\.md$/.toString(),
  );
  baseConfig.plugins = baseConfig.plugins.filter(
    (m) => m instanceof ProgressPlugin === false,
  ); // We are using Webpackbar, so no need in ProgressPlugin
  baseConfig.plugins.push(new HardSourceWebpackPlugin());
  baseConfig.plugins.push(new WebpackBar());
  baseConfig.resolve.plugins = [new TsconfigPathsPlugin()];

  baseConfig.module.rules.push({
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

  baseConfig.module.rules.push({
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

  baseConfig.module.rules.push({
    test: /README\.md$/,
    use: [
      {
        loader: require.resolve("raw-loader"),
      },
    ],
  });

  baseConfig.module.rules.push({
    test: new RegExp(`\.(${filesExts.join("|")})$`),
    use: [
      {
        loader: require.resolve("file-loader"),
        options: { outputPath: "assets/images" },
      },
    ],
  });

  baseConfig.resolve.extensions.unshift(".ts", ".tsx");

  return baseConfig;
};
