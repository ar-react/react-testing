import {
  act,
  fireEvent,
  prettyDOM,
  render,
  screen,
  within,
  logRoles,
} from "@testing-library/react";
import Class14, { User } from "../../src/components/class_14";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("Props Testing", () => {
  const name = "Arup";

  const { container, debug } = render(<User name={name} />);
  // this will print the container in the console for debugging purpose.
  console.log(prettyDOM(container)); // OR you can use debug() function
  // debug();
  // for printing complete html for debugging purpose, on the console.
  // DEBUG_PRINT_LIMIT=Infinity npm test OR
  // DEBUG_PRIINT_LIMIT=10000 npm test;

  // for getting log rule line by line of the html
  // logRoles(container);

  const user = screen.getByText(`Hello, ${name}`);
  expect(user).toBeInTheDocument();
});

test("function props testing & mocking", async () => {
  const testFn = jest.fn();

  render(<User name="Arup" testFn={testFn} />);

  const button = screen.getByText("Click Me");
  await user.click(button);

  // expect(testFn).toBeCalled(); // toBeCalled is deprecated, use toBeCalledTimes(1) instead
  expect(testFn).toHaveBeenCalledTimes(1);
});
