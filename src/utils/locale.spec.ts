import { findLocale, getDateFnsLocale } from "./locale";

const SUPPORTED_LOCALES = ["en-GB", "en-AU"];

let consoleWarnSpy: jest.SpyInstance;

describe("findLocale", () => {
  beforeAll(() => {
    consoleWarnSpy = jest
      .spyOn(global.console, "warn")
      .mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleWarnSpy.mockClear();
  });

  it("should return en-GB for en-GB", () => {
    expect(findLocale(SUPPORTED_LOCALES, "en-GB")).toBe("en-GB");
  });

  it("should return en-AU for en-AU", () => {
    expect(findLocale(SUPPORTED_LOCALES, "en-AU")).toBe("en-AU");
  });

  it("should return en-GB for en and do a warning", () => {
    expect(findLocale(SUPPORTED_LOCALES, "en")).toBe("en-GB");
    expect(consoleWarnSpy).toBeCalledTimes(1);
  });

  it("should return en-GB for en-US and do a warning", () => {
    expect(findLocale(SUPPORTED_LOCALES, "en-US")).toBe("en-GB");
    expect(consoleWarnSpy).toBeCalledTimes(1);
  });

  it("Should throw LocaleNotSupported error if not found", () => {
    expect(() => findLocale(SUPPORTED_LOCALES, "foo")).toThrow();
  });
});

describe("getDateFnsLocale", () => {
  it("Should output ru for ru", () => {
    expect(getDateFnsLocale("ru")).toBe("ru");
  });
  it("Should output enGB for en-GB", () => {
    expect(getDateFnsLocale("en-GB")).toBe("enGB");
  });
});
