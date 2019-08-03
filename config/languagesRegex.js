const { SUPPORTED_LOCALES } = require("../src/config/locales/locales");
const LANGUAGES_REGEX = new RegExp(
  `(${SUPPORTED_LOCALES.join("|")})($|\.js$|\/index\.js$)`,
);

module.exports = LANGUAGES_REGEX;
