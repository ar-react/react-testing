import { fireEvent, render, screen } from "@testing-library/react";
import Class08 from "../../src/components/class_08";
// Functional Component Method Testing
// 1. Discuss possible case for method testing.
// 2. Define the button, click event and method.
// 3. Test method with Event
// 4. Test method without Event.

// method testing with event.
test("getByLabelText testing 1", () => {
  render(<Class08 />);

  const input = screen.getByLabelText("UserName");
  expect(input).toBeInTheDocument();
});

test("getByLabelText testing 2", () => {
  render(<Class08 />);

  const checkbox = screen.getByLabelText("My Skills");
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toHaveAttribute("type", "chekbox");
});
