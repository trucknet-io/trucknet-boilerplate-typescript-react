import { SUPPORTED_LOCALES } from "src/config/locales";

export const findLocale = (locales: string[], locale: string) => {
  if (locales.includes(locale)) {
    return locale;
  }
  for (const localeToMatch of locales) {
    if (localeToMatch.includes(locale.split("-")[0])) {
      console.warn(
        `Locale ${locale} was not found. Using ${localeToMatch} as a fallback`,
      );
      return localeToMatch;
    }
  }
  throw new LocaleNotSupportedError(`Locale ${locale} was not found`);
};

export const getDateFnsLocale = (locale: string) => {
  return locale.replace("-", "");
};

export class LocaleNotSupportedError extends Error {}

export const DATE_FNS_LOCALES: {
  [key: string]: Locale;
} = SUPPORTED_LOCALES.reduce((res: { [key: string]: Locale }, locale) => {
  // tslint:disable-next-line: non-literal-require
  res[locale] = require(`date-fns/locale/${locale}.js`) as Locale;
  return res;
}, {});
