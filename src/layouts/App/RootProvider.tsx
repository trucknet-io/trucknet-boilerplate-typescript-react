import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { LionessProvider } from "lioness";
import * as React from "react";
import JssProvider from "react-jss/lib/JssProvider";
import jss from "src/config/jss";
import { createTheme } from "src/config/theme";
import { WithLocale, withLocale } from "src/contexts/LocaleContext";
import * as messages from "src/i18n/translations.json";

class RootProvider extends React.Component<WithLocale> {
  public render() {
    const { locale, direction } = this.props;
    return (
      <LionessProvider locale={locale} messages={messages}>
        <MuiThemeProvider theme={createTheme(direction)}>
          <JssProvider {...jss}>
            <React.Fragment>
              <CssBaseline />
              {this.props.children}
            </React.Fragment>
          </JssProvider>
        </MuiThemeProvider>
      </LionessProvider>
    );
  }
}

export default withLocale(RootProvider);
