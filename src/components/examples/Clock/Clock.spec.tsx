import { advanceBy, clear } from "jest-date-mock";
import "jest-dom/extend-expect";
import React from "react";
import { cleanup, getNodeText, render } from "react-testing-library";
import Clock from "./Clock";

afterEach(() => {
  cleanup();
  clear();
});
beforeEach(jest.useFakeTimers);

const clockTestId = "clock-value";
it("should rerender each second", async () => {
  const { getByTestId } = render(<Clock />);
  const clock = getByTestId(clockTestId);
  const result = getNodeText(clock);
  advanceBy(1000);
  jest.runOnlyPendingTimers();
  expect(getNodeText(clock)).not.toBe(result);
});
