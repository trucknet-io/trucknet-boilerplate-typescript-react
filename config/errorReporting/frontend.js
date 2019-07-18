import * as Sentry from "@sentry/browser";
import config from "./config.js";
import isSentryConfigured from "./isSentryConfigured.front";

Sentry.init({
  dsn: config.dsn,
  enabled: !config.dryRun && isSentryConfigured,
  debug: false,
  release: config.release,
  environment: config.environment,
});
