import "jest-dom/extend-expect";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import App from "src/layout/App";

afterEach(cleanup);

describe("App component", () => {
  test("should render without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
