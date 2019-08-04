import React from "react";

import { RawLocaleProvider } from "src/contexts/LocaleContext";

import MuiLocaleProvider from "./MuiLocaleProvider";

export type StorybookLocaleProviderProps = {
  direction: "ltr" | "rtl";
  locale: string;
};

class StorybookLocaleProvider extends React.PureComponent<
  StorybookLocaleProviderProps
> {
  public render() {
    const { children, direction, locale } = this.props;
    return (
      <RawLocaleProvider
        value={{ direction, locale, changeLocale: this.changeLocale }}>
        <MuiLocaleProvider>{children}</MuiLocaleProvider>
      </RawLocaleProvider>
    );
  }

  private changeLocale = () => false;
}

export default StorybookLocaleProvider;
