import { fireEvent, render, screen, within } from "@testing-library/react";
import Class12 from "../../src/components/class_12";

// Javascript Query | Custom Query
test("JavaScript Query | Custom Query", () => {
  render(<Class12 />);
  const button = document.querySelector("#myButton");
  expect(button).toBeInTheDocument();
});

// Querying within Elements
test("Querying within Elements", () => {
  render(<Class12 />);
  const divText = screen.getByText("Hello World");
  const pText = within(divText).getByText("My");

  expect(pText).toBeInTheDocument();
});
