import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import HelloWorld from "./HelloWorld";
import * as READMEMd from "./README.md";

const stories = storiesOf("HelloWorld", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
  // TODO typings disappered
});

stories.add("With black message default", () => (
  <HelloWorld color="black" message="default" onChange={action("onChange")} />
));

stories.add("With red message Hellow", () => (
  <HelloWorld color="red" message="Helo" onChange={action("onChange")} />
));

stories.add("With red emoji", () => (
  <HelloWorld color="red" message="😋" onChange={action("onChange")} />
));