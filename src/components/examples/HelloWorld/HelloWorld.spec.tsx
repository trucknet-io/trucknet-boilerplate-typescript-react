import "jest-dom/extend-expect";
import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import HelloWorld from "./HelloWorld";

const message = "test";
const color = "red";

afterEach(cleanup);

it("should contain message with !", () => {
  const { getByText } = render(<HelloWorld message={message} color={color} />);
  expect(getByText(`${message}!`)).toBeInTheDocument();
});

it("should be in the color of color prop", () => {
  const { getByText } = render(<HelloWorld message={message} color={color} />);
  expect(getByText(`${message}!`)).toHaveStyle(`color: ${color}`);
});

it("should render 1 on the button after render", () => {
  const { getByTestId } = render(
    <HelloWorld message={message} color={color} />,
  );
  expect(getByTestId("counter-button")).toHaveTextContent("1");
});

it("should render 4 after the button was clicked 3 times", () => {
  const { getByTestId } = render(
    <HelloWorld message={message} color={color} />,
  );
  fireEvent.click(getByTestId("counter-button"));
  fireEvent.click(getByTestId("counter-button"));
  expect(getByTestId("counter-button")).toHaveTextContent("3");
});

it("should fire an onChange function with an updated value", () => {
  const handleChangeSpy = jest.fn();
  const { getByTestId } = render(
    <HelloWorld message={message} color={color} onChange={handleChangeSpy} />,
  );
  fireEvent.click(getByTestId("counter-button"));
  expect(handleChangeSpy).toHaveBeenLastCalledWith(2);
  fireEvent.click(getByTestId("counter-button"));
  expect(handleChangeSpy).toHaveBeenLastCalledWith(3);
});
