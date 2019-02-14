import React from "react";
import { addDecorator, configure } from "@storybook/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "src/contexts/theme";
import { withInfo } from "@storybook/addon-info";
import { checkA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import "@storybook/addon-console";

addDecorator(
  withInfo({
    inline: false,
  }),
);
addDecorator(withSmartKnobs);
addDecorator(withKnobs);
addDecorator(checkA11y);
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
