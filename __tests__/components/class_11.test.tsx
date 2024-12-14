import { fireEvent, render, screen } from "@testing-library/react";
import Class11 from "../../src/components/class_11";

// There are mainly three types of queries in testing-library
// 1. getBy*: returns the first matching node for the query
// 2. queryBy*: returns the first matching node for the query
// 3. findBy*: returns a promise that resolves when a node is found for the query

test("queryby and queryByAll Testing", () => {
  render(<Class11 />);
  // queryBy* returns null if no element is found

  const button = screen.queryByText("Login");
  expect(button).not.toBeInTheDocument();
});

test("findBy* and queryBy* Testing", async () => {
  render(<Class11 />);
  // findBy* returns a promise that resolves when a node is found for the query
  const button = await screen.findByText(
    "data is loaded",
    {},
    { timeout: 2000 }
  );
  expect(button).toBeInTheDocument();
});
