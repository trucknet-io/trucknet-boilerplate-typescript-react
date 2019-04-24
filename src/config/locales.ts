export type Locale = {
  code: string;
  englishTitle: string;
  localTitle: string;
};

const locales: Locale[] = [
  {
    code: "en-GB",
    englishTitle: "English",
    localTitle: "English",
  },
  {
    code: "ru",
    englishTitle: "Russian",
    localTitle: "Русский",
  },
  {
    code: "he",
    englishTitle: "Hebrew",
    localTitle: "עברית",
  },
];

export const supportedLocales = locales.map((l) => l.code);

export default locales;
