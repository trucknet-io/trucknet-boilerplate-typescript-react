import { action } from "@storybook/addon-actions";
import { color, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import HelloWorld from "./HelloWorld";
import READMEMd from "./README.md";

const stories = storiesOf("HelloWorld", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
  // TODO typings disappered
});

stories.add("With black message default", () => (
  <HelloWorld
    color={color("color", "black")}
    message={text("message", "default")}
    onChange={action("onChange")}
  />
));

stories.add("With red message Hello", () => (
  <HelloWorld
    color={color("color", "red")}
    message={text("message", "Hello")}
    onChange={action("onChange")}
  />
));

stories.add("With red emoji", () => (
  <HelloWorld
    color={color("color", "red")}
    message={text("message", "😋")}
    onChange={action("onChange")}
  />
));
