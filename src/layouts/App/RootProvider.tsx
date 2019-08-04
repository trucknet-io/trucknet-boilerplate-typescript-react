import React from "react";
import MuiLocaleProvider from "./MuiLocaleProvider";

class RootProvider extends React.PureComponent {
  public render() {
    return <MuiLocaleProvider>{this.props.children}</MuiLocaleProvider>;
  }
}

export default RootProvider;
