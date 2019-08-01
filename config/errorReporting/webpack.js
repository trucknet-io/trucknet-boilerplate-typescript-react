const SentryCliPlugin = require("@sentry/webpack-plugin");
const path = require("path");

const config = require("./config");
const sentryConfigured = require("./isSentryConfigured.node");

const plugin = new SentryCliPlugin({
  include: ".",
  ignore: ["node_modules", "webpack.config.js"],
  release: config.release,
  debug: false,
  dryRun: config.dryRun || !sentryConfigured,
  configFile: path.resolve(__dirname, ".sentryclirc"),
});

module.exports = plugin;
