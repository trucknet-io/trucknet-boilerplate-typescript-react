import rc from "raw-loader!../../.sentryclirc";

var sentryConfigured = !/(project|token) = xxx/.test(rc);

if (!sentryConfigured) {
  console.warn(".sentryclirc is not configured with proper project/token");
}

export default sentryConfigured;
