import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { LionessProvider } from "lioness";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import "src/config/reactHotLoader"; // tslint:disable-line no-import-side-effect
import { theme } from "src/contexts/theme";
import * as messages from "src/i18n/translations.json";
import Body from "src/layouts/Body";

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <LionessProvider locale="en" messages={messages}>
          <MuiThemeProvider theme={theme}>
            <Body />
          </MuiThemeProvider>
        </LionessProvider>
      </React.Fragment>
    );
  }
}

export default hot(App);
