import { fireEvent, render, screen } from "@testing-library/react";
import Class10 from "../../src/components/class_10";

// Text Match
test("TextMatch testing with sting", () => {
  render(<Class10 />);
  const divText = screen.getByText("Hello Wrold", { exact: false });
  expect(divText).toBeInTheDocument();
});

test("TextMatch testing with regex", () => {
  render(<Class10 />);
  const divText = screen.getByText(/Hello w?rold/i); // this ? will ignore w in while matching
  expect(divText).toBeInTheDocument();
});

test("TextMatch with function", () => {
  render(<Class10 />);
  const divText = screen.getByText((content, element) => {
    return content.startsWith("Hello");
  });
  expect(divText).toBeInTheDocument();
});
