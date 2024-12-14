import { fireEvent, render, screen } from "@testing-library/react";
import Class04 from "../../src/components/class_04";

test("click event testing", () => {
  render(<Class04 />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(screen.getByText("clicked")).toBeInTheDocument();
});
