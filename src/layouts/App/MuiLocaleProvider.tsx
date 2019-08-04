import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import { LionessProvider } from "lioness";
import React from "react";

import jss from "src/config/jss";
import { createTheme } from "src/config/theme";
import { WithLocale, withLocale } from "src/contexts/LocaleContext";
import translationsJson from "src/i18n/translations.json";

export class MuiLocaleProvider extends React.PureComponent<WithLocale> {
  public render() {
    const { locale, direction } = this.props;
    return (
      <LionessProvider locale={locale} messages={translationsJson}>
        <MuiThemeProvider theme={createTheme(direction)}>
          <StylesProvider {...jss}>
            <React.Fragment>
              <CssBaseline />
              {this.props.children}
            </React.Fragment>
          </StylesProvider>
        </MuiThemeProvider>
      </LionessProvider>
    );
  }
}

export default withLocale(MuiLocaleProvider);
