import * as Sentry from "@sentry/browser";
import config from "./config.js";

Sentry.init({
  dsn: config.dsn,
  enabled: !config.dryRun,
  debug: false,
  release: config.release,
  environment: config.environment,
});
