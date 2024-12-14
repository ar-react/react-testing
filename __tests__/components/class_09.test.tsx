import { fireEvent, render, screen } from "@testing-library/react";
import Class09 from "../../src/components/class_09";

test("getByTestId Testing", () => {
  render(<Class09 />);

  const button1 = screen.getByTestId("button1");
  const button2 = screen.getByTestId("button2");

  expect(button1).toBeInTheDocument();
  expect(button2).toBeInTheDocument();
});

test("getByAllTestId Testing", () => {
  render(<Class09 />);

  const lists = screen.getAllByTestId("list");

  for (let list of lists) {
    expect(list).toBeInTheDocument();
  }
});

test("getByDisplayValue/getAllByDisplayValue Testing", () => {
  render(<Class09 />);

  const input = screen.getByDisplayValue("Arup");

  expect(input).toBeInTheDocument();
});

test("getByTitle/getAllByTitle Testing", () => {
  render(<Class09 />);

  const span = screen.getByTitle("arup");
  expect(span).toBeInTheDocument();
});

test("getByAltText/getAllByAltText Testing", () => {
  render(<Class09 />);

  const img = screen.getByAltText("this is image");
  expect(img).toBeInTheDocument();
});

// Assersion methods -

test("Assersion method", () => {
  render(<Class09 />);

  const input1 = screen.getByRole("textbox");
  // const input2 = screen.toHaveValue("Arup");

  expect(input1).toBeEnabled();
  expect(input1).toBeInTheDocument();
  expect(input1).toHaveAttribute("name", "name");
  expect(input1).toHaveClass("form-controll");
  // expect(input2).toBeInTheDocument();
});
