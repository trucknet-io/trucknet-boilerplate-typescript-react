import { Hub } from "@sentry/browser";

declare global {
  interface Window {
    __SENTRY__: {
      hub: Hub;
    };
  }
}
