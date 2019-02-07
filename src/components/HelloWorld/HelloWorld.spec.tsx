import "jest-dom/extend-expect";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import HelloWorld from "src/components/HelloWorld";

const message = "test";
const color = "red";

afterEach(cleanup);

describe("HelloWorld component", () => {
  it("should contain message with !", () => {
    const { getByText } = render(
      <HelloWorld message={message} color={color} />,
    );
    expect(getByText(`${message}!`)).toBeInTheDocument();
  });

  it("should be in the color of color prop", () => {
    const { getByText } = render(
      <HelloWorld message={message} color={color} />,
    );
    expect(getByText(`${message}!`)).toHaveStyle(`color: ${color}`);
  });
});
