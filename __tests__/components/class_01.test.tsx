import { render, screen } from "@testing-library/react";
import Class01 from "../../src/components/class_01";

test("renders Class 01 component", () => {
  render(<Class01 />);
  const h1Element = screen.getByText(/hello world/i);
  const title = screen.getByTitle(/placeholder img/i);
  expect(h1Element).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
