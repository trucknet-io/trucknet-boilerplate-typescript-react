import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import { theme } from "src/contexts/theme";
import Body from "src/layout/Body";
class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Body />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
