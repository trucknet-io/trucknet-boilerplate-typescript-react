import { addDecorator, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import "@storybook/addon-console";
import StorybookLocaleProvider from "src/layouts/App/StorybookLocaleProvider";
import messages from "src/i18n/translations.json";
import { supportedLocales } from "src/config/locales";
import { addParameters } from "@storybook/react";
import { withI18n } from "storybook-addon-i18n";

addDecorator(
  withInfo({
    inline: false,
  }),
);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withI18n);

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
  i18n: {
    provider: StorybookLocaleProvider,
    providerProps: {
      messages,
    },
    supportedLocales,
  },
});

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
