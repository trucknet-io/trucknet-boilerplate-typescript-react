import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { createTheme } from "src/config/theme";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import "@storybook/addon-console";
import { LionessProvider } from "lioness";
import messages from "src/i18n/translations.json";
// import { supportedLocales } from "src/config/locales";
import { addParameters } from "@storybook/react";
import { muiTheme } from "storybook-addon-material-ui";

const themeLtr = createTheme("ltr");
themeLtr.themeName = "Main";

addDecorator(
  withInfo({
    inline: false,
  }),
);

addDecorator(muiTheme([themeLtr]));
addDecorator(withA11y);

addParameters({
  backgrounds: [
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
  ],
});

addDecorator((story) =>
  React.createElement(LionessProvider, {
    locale: "en-GB",
    messages: messages,
    children: story(),
  }),
);

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
