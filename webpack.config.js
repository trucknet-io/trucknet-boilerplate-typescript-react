const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CaseSensitivePathsWebpackPlugin = require("case-sensitive-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const RollbarSourceMapPlugin = require("rollbar-sourcemap-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const paths = {
  input: "src",
  static: "public",
  output: "www",
  main: "./src/index.tsx",
  template: "src/index.ejs",
};

const TITLE = "Boilerplate";
const LANGUAGES_REGEX = new RegExp("en,he".split(",").join("|"));
const DEV = process.env.NODE_ENV !== "production";

const plugins = [
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, LANGUAGES_REGEX),
  new CleanWebpackPlugin([paths.output]),
  new CopyWebpackPlugin([paths.static]),
  new CaseSensitivePathsWebpackPlugin({ debug: false }),
  new webpack.EnvironmentPlugin({
    ROLLBAR_CLIENT_TOKEN: null, // not required, so it is null
    ROLLBAR_ENV: undefined,
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, paths.template),
    hash: false,
    filename: "index.html",
    inject: "body",
    title: TITLE,
    minify: {
      collapseWhitespace: false,
    },
  }),
];

if (DEV) {
  plugins.push(new webpack.NamedModulesPlugin());
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
} else {
  plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: "static" }));
}

if (process.env.ROLLBAR_SERVER_TOKEN && process.env.BASE_URL) {
  plugins.push(
    new RollbarSourceMapPlugin({
      accessToken: process.env.ROLLBAR_SERVER_TOKEN,
      version: pjson.version,
      publicPath: process.env.BASE_URL,
      ignoreErrors: true,
    }),
  );
}

module.exports = {
  entry: paths.main,
  devtool: DEV ? "cheap-module-eval-source-map" : "hidden-source-map", // https://webpack.js.org/configuration/devtool/
  devServer: {
    // https://webpack.js.org/configuration/dev-server/
    port: "3000",
    contentBase: path.join(__dirname, paths.static),
    historyApiFallback: true,
    hot: true,
  },
  mode: DEV ? "development" : "production",
  output: {
    path: path.resolve(__dirname, paths.output),
    filename: DEV ? "[name].js" : "assets/js/[name].[hash].js",
    chunkFilename: DEV ? "[name].js" : "assets/js/[name].[hash].bundle.js",
  },
  plugins,
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("awesome-typescript-loader"),
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{ loader: "file-loader", options: { outputPath: "assets/images" } }],
      },
    ],
  },
};
