var version = require("../../package.json").version;

var SENTRY_ENV = process.env.SENTRY_ENV;
var SENTRY_DSN = process.env.SENTRY_DSN;
var NODE_ENV = process.env.NODE_ENV;

var isProduction = SENTRY_ENV === "production";
var hasDsn = SENTRY_DSN && SENTRY_DSN.length > 0;

if (isProduction && !hasDsn) {
  console.warn(
    "SENTRY_DSN is not set up. Please put a correct DSN to .envcmdrc file",
  );
}

module.exports = {
  release: isProduction ? version : version + "-dev",
  dryRun: NODE_ENV !== "production",
  environment: SENTRY_ENV,
  dsn: SENTRY_DSN,
};
