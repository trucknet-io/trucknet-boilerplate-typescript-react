// tslint:disable-next-line: no-import-side-effect
import "babel-polyfill";

import * as React from "react";
import { render } from "react-dom";
import App from "src/layouts/App";

render(<App />, document.getElementById("root") as HTMLElement);
