import { fireEvent, render, screen } from "@testing-library/react";
import Class03 from "../../src/components/class_03";

test("onChange event testing", () => {
  render(<Class03 />);

  let input = screen.getByRole("textbox");

  fireEvent.change(input, { target: { value: "a" } });
  expect(input).toHaveValue("a");
  //   expect(input.value).toBe("a");
});
