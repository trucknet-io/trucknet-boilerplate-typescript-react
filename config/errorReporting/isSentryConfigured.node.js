var fs = require("fs");
var path = require("path");

var rc = fs.readFileSync(path.join(__dirname, "../../.sentryclirc")).toString();

var sentryConfigured = !/(project|token) = xxx/.test(rc);

if (!sentryConfigured) {
  console.warn(".sentryclirc is not configured with proper project/token");
}

module.exports = sentryConfigured;
