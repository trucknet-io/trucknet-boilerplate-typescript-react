import { LionessProvider } from "lioness";
import * as React from "react";
import { render } from "react-testing-library";
import translationsJson from "src/i18n/translations.json";

const renderWithIntl = (ui: React.ReactElement, { locale = "en-GB" } = {}) => {
  return {
    ...render(
      <LionessProvider locale={locale} messages={translationsJson}>
        {ui}
      </LionessProvider>,
    ),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
};

export default renderWithIntl;
