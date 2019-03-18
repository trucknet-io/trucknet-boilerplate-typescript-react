import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import JssProvider from "react-jss/lib/JssProvider";
import jss from "src/config/jss";
import { createTheme } from "src/config/theme";
import { WithLocale, withLocale } from "src/contexts/LocaleContext";

class RootProvider extends React.Component<WithLocale> {
  public render() {
    const { direction } = this.props;
    return (
      <MuiThemeProvider theme={createTheme(direction)}>
        <JssProvider {...jss}>
          <React.Fragment>
            <CssBaseline />
            {this.props.children}
          </React.Fragment>
        </JssProvider>
      </MuiThemeProvider>
    );
  }
}

export default withLocale(RootProvider);
