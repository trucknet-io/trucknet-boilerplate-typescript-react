import { createShallow } from "@material-ui/core/test-utils";
import * as React from "react";
import HelloWorld from "src/components/HelloWorld";

const message = "test";
const color = "red";

const wrapper = createShallow()(<HelloWorld message={message} color={color} />);

describe("src/components/HelloWorld", () => {
  test("Should contain message with !", () => {
    expect(wrapper.text()).toBe(`${message}!`);
  });

  test("Should be in the color of color prop", () => {
    expect(wrapper.find("h1").prop("style")).toMatchObject({
      color,
    });
  });
});
