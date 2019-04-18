import * as Sentry from "@sentry/browser";
import { IS_DEV, IS_PROD, SENTRY_DSN, SENTRY_ENV } from "src/config/env";
// tslint:disable-next-line no-relative-imports
import { version } from "../package.json";

Sentry.init({
  dsn: SENTRY_DSN,
  enabled: !IS_DEV,
  debug: false,
  release: IS_PROD ? version : `${version}-dev`,
  environment: SENTRY_ENV,
});
