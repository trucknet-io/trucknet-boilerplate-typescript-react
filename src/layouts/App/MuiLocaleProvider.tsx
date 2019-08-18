import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import React from "react";
import { WithLocale, withLocale } from "react-targem";

import jss from "src/config/jss";
import { createTheme } from "src/config/theme";

export class MuiLocaleProvider extends React.PureComponent<WithLocale> {
  public render() {
    const { direction } = this.props;
    return (
      <MuiThemeProvider theme={createTheme(direction)}>
        <StylesProvider {...jss}>
          <React.Fragment>
            <CssBaseline />
            {this.props.children}
          </React.Fragment>
        </StylesProvider>
      </MuiThemeProvider>
    );
  }
}

export default withLocale(MuiLocaleProvider);
