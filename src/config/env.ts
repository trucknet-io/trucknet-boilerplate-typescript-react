export const IS_PROD: boolean = process.env.NODE_ENV === "production";
export const IS_DEV: boolean = process.env.NODE_ENV !== "production";
// "https://<key>@sentry.io/<project>"
export const SENTRY_DSN: string | undefined = process.env.SENTRY_DSN;
export const SENTRY_ENV: string | undefined = process.env.SENTRY_ENV;
