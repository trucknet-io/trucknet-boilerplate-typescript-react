import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Clock } from "./Clock";
import READMEMd from "./README.md";

const stories = storiesOf("Clock", module);

stories.addParameters({
  info: {
    text: READMEMd,
  },
});

stories.add("Default", () => <Clock classes={{ card: "f" }} />);
