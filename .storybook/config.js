import React from "react";
import { addDecorator, configure } from "@storybook/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "src/contexts/theme";
import { withInfo } from "@storybook/addon-info";

// https://github.com/storybooks/storybook/tree/master/addons/info
addDecorator(withInfo);

addDecorator((story) =>
  React.createElement(MuiThemeProvider, {
    theme,
    children: React.createElement(CssBaseline, { children: story() }),
  }),
);

const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
