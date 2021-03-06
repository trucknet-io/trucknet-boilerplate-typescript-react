const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CaseSensitivePathsWebpackPlugin = require("case-sensitive-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const WebpackBar = require("webpackbar");

const filesExts = require("./config/filesExts");
const errorReportingPlugin = require("./config/errorReporting/webpack");
const { SUPPORTED_LOCALES } = require("./src/config/locales/locales");

const paths = {
  input: "src",
  static: "public",
  output: "www",
  template: "src/index.ejs",
  entry: {
    errorReporting: "./config/errorReporting/frontend.js",
    main: "./src/index.tsx",
  },
};

const TITLE = "Boilerplate";
const LANGUAGES_REGEX = new RegExp(
  `(${SUPPORTED_LOCALES.join("|")})($|\.js$|\/index\.js$)`,
);
const DEV = process.env.NODE_ENV !== "production";
const E2E = !!process.env.E2E;

const plugins = [
  new WebpackBar(),
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, LANGUAGES_REGEX),
  new webpack.ContextReplacementPlugin(/date-fns[/\\]locale$/, LANGUAGES_REGEX),
  new CleanWebpackPlugin([paths.output]),
  new CopyWebpackPlugin([paths.static]),
  new CaseSensitivePathsWebpackPlugin({ debug: false }),
  new webpack.EnvironmentPlugin({
    // null for not required variables
    // undefined - for required
    SENTRY_DSN: null,
    SENTRY_ENV: null,
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
  errorReportingPlugin,
];

if (DEV) {
  const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

  plugins.push(new webpack.NamedModulesPlugin());
  plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  plugins.push(new HardSourceWebpackPlugin());
} else {
  plugins.push(
    new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: "static" }),
  );
}

module.exports = {
  entry: paths.entry,
  devtool: DEV ? "cheap-module-eval-source-map" : "hidden-source-map", // https://webpack.js.org/configuration/devtool/
  devServer: {
    // https://webpack.js.org/configuration/dev-server/
    port: "3000",
    contentBase: path.join(__dirname, paths.static),
    historyApiFallback: true,
    hot: true,
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 500,
      ignored: ["node_modules", "dist"],
    },
    stats: "minimal",
  },
  mode: DEV ? "development" : "production",
  output: {
    path: path.resolve(__dirname, paths.output),
    filename: DEV ? "[name].js" : "assets/js/[name].[hash].js",
    chunkFilename: DEV ? "[name].js" : "assets/js/[name].[hash].bundle.js",
  },
  plugins,
  resolve: {
    extensions: [".ts", ".tsx", ".wasm", ".mjs", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              getCustomTransformers: path.join(
                __dirname,
                "./config/polyfills.js",
              ),
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        use: [require.resolve("react-hot-loader/webpack")],
      },
      {
        test: new RegExp(`\.(${filesExts.join("|")})$`),
        use: [
          {
            loader: require.resolve("file-loader"),
            options: { outputPath: "assets/images" },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: require.resolve("html-loader"),
          },
          {
            loader: require.resolve("markdown-loader"),
          },
        ],
      },
    ],
  },
};
