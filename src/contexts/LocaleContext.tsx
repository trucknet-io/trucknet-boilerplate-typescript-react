import * as React from "react";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "src/config/locales";
import { findLocale } from "src/utils/locale";

export interface WithLocale {
  locale: string;
  direction: "ltr" | "rtl";
  changeLocale(locale: string): void;
}

const { Provider, Consumer } = React.createContext<WithLocale>({
  locale: "en-GB",
  direction: "ltr",
  changeLocale: (locale: string) => locale,
});

export { Provider as RawLocaleProvider };

export class LocaleContextProvider extends React.Component<{}, WithLocale> {
  constructor(props: {}) {
    super(props);
    const defaultLocale = this.getDefaultLocale();
    this.state = {
      changeLocale: this.changeLocale,
      ...this.getStateForLocale(defaultLocale),
    };
    this.handleLocaleChanged(defaultLocale);
  }

  public render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }

  private getDefaultLocale = () => {
    if (navigator.language) {
      return findLocale(SUPPORTED_LOCALES, navigator.language);
    }
    return DEFAULT_LOCALE.code;
  };

  private changeBodyDir = (locale: string) =>
    (document.body.dir = this.getDirection(locale));

  private getDirection = (locale: string): "rtl" | "ltr" =>
    locale === "he" ? "rtl" : "ltr";

  private changeLocale = (locale: string) => {
    this.setState(this.getStateForLocale(locale));
    this.handleLocaleChanged(locale);
  };

  private getStateForLocale = (locale: string) => {
    const direction = this.getDirection(locale);
    return {
      locale,
      direction,
    };
  };

  private handleLocaleChanged = (locale: string) => {
    this.changeBodyDir(locale);
  };
}

export const withLocale = <
  P extends WithLocale,
  R = Pick<P, Exclude<keyof P, keyof WithLocale>>
>(
  Component: React.ComponentType<P>,
): React.SFC<R> => {
  return (props: R) => {
    return (
      // tslint:disable-next-line no-any
      <Consumer>{(ctx) => <Component {...ctx} {...(props as any)} />}</Consumer>
    );
  };
};
