import { fireEvent, render, screen } from "@testing-library/react";
import Class07, { sayHi } from "../../src/components/class_07";
// Functional Component Method Testing
// 1. Discuss possible case for method testing.
// 2. Define the button, click event and method.
// 3. Test method with Event
// 4. Test method without Event.

// method testing with event.
test("method testing case 1", () => {
  render(<Class07 />);

  const button = screen.getByTestId("btn1");
  fireEvent.click(button);
  expect(screen.getByText("Hello World")).toBeInTheDocument();

  //  const button2 = screen.getByRole("button", { name: /Say Hi/i });
  //  expect(button2).toBeInTheDocument();
});

// method testing without event.
test("method testing case 2", () => {
  // expect(sayHi()).toBe("HI"); OR
  expect(sayHi()).toMatch("HI");
});
