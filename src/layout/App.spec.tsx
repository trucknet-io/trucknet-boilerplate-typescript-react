import { createShallow } from "@material-ui/core/test-utils";
import * as React from "react";
import App from "src/layout/App";

const wrapper = createShallow()(<App />);

describe("src/App", () => {
  test("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
