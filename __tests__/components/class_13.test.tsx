import { act, fireEvent, render, screen, within } from "@testing-library/react";
import Class13 from "../../src/components/class_13";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("User Event Click Testing", async () => {
  // const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  render(<Class13 />);

  const button = screen.getByText("Submit");
  await user.click(button);
  expect(screen.getByText("hello")).toBeInTheDocument();
});

test("User Event Input Testing (with act fn)", async () => {
  render(<Class13 />);

  const input = screen.getByPlaceholderText("enter name");
  await act(async () => {
    // sometime assert code get executed before the state update, if you get state update related warning, the wrap the state update code inside act function.
    await user.type(input, "John");
  });
  expect(screen.getByText("John")).toBeInTheDocument();
});
