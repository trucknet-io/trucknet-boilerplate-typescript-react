import React from "react";
import { TargemStatefulProvider } from "react-targem";
import { render } from "react-testing-library";
import translationsJson from "src/i18n/translations.json";

const renderWithIntl = (ui: React.ReactElement, { locale = "en-GB" } = {}) => {
  return {
    ...render(
      <TargemStatefulProvider
        defaultLocale={locale}
        translations={translationsJson}>
        {ui}
      </TargemStatefulProvider>,
    ),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
};

export default renderWithIntl;
