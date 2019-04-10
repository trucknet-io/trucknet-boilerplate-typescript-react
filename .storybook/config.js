import React from "react";
import { addDecorator, configure } from "@storybook/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "src/config/theme";
import { withInfo } from "@storybook/addon-info";
import { checkA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import "@storybook/addon-console";
import { LionessProvider } from "lioness";
import * as messages from "src/i18n/translations.json";
// import { supportedLocales } from "src/config/locales";
import { withBackgrounds } from "@storybook/addon-backgrounds";

addDecorator(
  withInfo({
    inline: false,
  }),
);
addDecorator(
  withBackgrounds([
    { name: "white", value: "#fff", default: true },
    { name: "Lime Green", value: "#2CCE62" },
    { name: "Tarawera", value: "#29464D" },
    { name: "Elephant", value: "#1F3239" },
    { name: "Nero", value: "#212121" },
    { name: "Night Rider", value: "#303030" },
    { name: "Mortar", value: "#535353" },
    { name: "Grey", value: "#808080" },
    { name: "Very Light Grey", value: "#C7C7C7" },
    { name: "White Smoke", value: "#EBEBEB" },
    { name: "Dodger Blue", value: "#2979FF" },
    { name: "Lightning Yellow", value: "#F9A825" },
    { name: "Torch Red", value: "#FF1744" },
  ]),
);

addDecorator(withSmartKnobs);
addDecorator(withKnobs);
addDecorator(checkA11y);

const theme = createTheme("ltr");
theme.palette.background.default = "none"; // Need for background plugin
addDecorator((story) =>
  React.createElement(LionessProvider, {
    locale: "en",
    messages: messages,
    children: React.createElement(MuiThemeProvider, {
      theme,
      children: React.createElement(CssBaseline, { children: story() }),
    }),
  }),
);

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
