import React from "react";
import { TargemProvider } from "react-targem";

import translationsJson from "src/i18n/translations.json";
import MuiLocaleProvider from "./MuiLocaleProvider";

export type StorybookLocaleProviderProps = {
  locale: string;
};

class StorybookLocaleProvider extends React.PureComponent<
  StorybookLocaleProviderProps
> {
  public render() {
    const { children, locale } = this.props;
    return (
      <TargemProvider locale={locale} translations={translationsJson}>
        <MuiLocaleProvider>{children}</MuiLocaleProvider>
      </TargemProvider>
    );
  }
}

export default StorybookLocaleProvider;
