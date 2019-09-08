import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router } from "react-router-dom";
import { TargemStatefulProvider } from "react-targem";

import { DEFAULT_LOCALE } from "src/config/locales";
import "src/config/reactHotLoader"; // tslint:disable-line no-import-side-effect
import translationsJson from "src/i18n/translations.json";
import Body from "src/layouts/Body";

import RootProvider from "./RootProvider";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <TargemStatefulProvider
          defaultLocale={DEFAULT_LOCALE.code}
          translations={translationsJson}>
          <RootProvider>
            <Body />
          </RootProvider>
        </TargemStatefulProvider>
      </Router>
    );
  }
}

export default hot(App);
