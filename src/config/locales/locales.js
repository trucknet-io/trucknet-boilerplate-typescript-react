// Keep this as .js with a separate type definitions to allow
// importing this in Gatsby's js configs

const LOCALES = [
  {
    code: "en-GB",
    englishTitle: "English",
    localTitle: "English",
  },
  {
    code: "he",
    englishTitle: "Hebrew",
    localTitle: "עברית",
    direction: "rtl",
  },
  {
    code: "ru",
    englishTitle: "Russian",
    localTitle: "Русский",
  },
];

const LOCALES_MAP = LOCALES.reduce((res, locale) => {
  res[locale.code] = locale;
  return res;
}, {});

const SUPPORTED_LOCALES = LOCALES.map((l) => l.code);

const DEFAULT_LOCALE = LOCALES[0];

module.exports = {
  LOCALES,
  LOCALES_MAP,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
};
