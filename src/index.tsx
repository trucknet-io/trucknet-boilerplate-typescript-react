// tslint:disable-next-line: no-import-side-effect
import "babel-polyfill";

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "src/layouts/App";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
