import * as React from "react";
import { hot } from "react-hot-loader/root";
import "src/config/reactHotLoader"; // tslint:disable-line no-import-side-effect
import { LocaleContextProvider } from "src/contexts/LocaleContext";
import Body from "src/layouts/Body";
import RootProvider from "./RootProvider";

class App extends React.Component {
  public render() {
    return (
      <LocaleContextProvider>
        <RootProvider>
          <Body />
        </RootProvider>
      </LocaleContextProvider>
    );
  }
}

export default hot(App);
