import "jest-dom/extend-expect";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import App from "./App";

afterEach(cleanup);

beforeEach(() => {
  // Hide warning
  console.warn = jest.fn();
});

describe("App component", () => {
  test("should render without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
    expect(console.warn).toBeCalledTimes(1);
    expect(console.warn).toBeCalledWith(
      "Locale en-US was not found. Using en-GB as a fallback",
    );
  });
});
