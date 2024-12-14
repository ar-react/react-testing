import { render, screen } from "@testing-library/react";
import Class02 from "../../src/components/class_02";

test("Testing input box", () => {
  render(<Class02 />);

  const isInputBoxAvailable = screen.getByRole("textbox");
  const checkPlaceholderText = screen.getByPlaceholderText("Enter user name");

  // check if input box is available
  expect(isInputBoxAvailable).toBeInTheDocument();

  // check if placeholder text is available
  expect(checkPlaceholderText).toBeInTheDocument();

  // check if input box have type attribute with value text
  expect(isInputBoxAvailable).toHaveAttribute("type", "text");

  // check if input box have name attribute with value username
  expect(isInputBoxAvailable).toHaveAttribute("name", "username");

  // check if input box have id attribute with value userId
  expect(isInputBoxAvailable).toHaveAttribute("id", "userId");
});
