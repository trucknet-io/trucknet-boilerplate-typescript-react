export type LocaleCode = "en-GB" | "he" | "ru";

export type LocaleDirection = "ltr" | "rtl";

export type Locale = {
  code: LocaleCode;
  englishTitle: string;
  localTitle: string;
  direction?: LocaleDirection;
};

export const LOCALES: Locale[];

export type LocalesMap = { [key in LocaleCode]: Locale };

export const LOCALES_MAP: LocalesMap;

export const SUPPORTED_LOCALES: LocaleCode[];
export const DEFAULT_LOCALE: Locale;
