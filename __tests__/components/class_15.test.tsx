import {
  act,
  fireEvent,
  prettyDOM,
  render,
  screen,
  within,
  logRoles,
} from "@testing-library/react";
import Class15 from "../../src/components/class_15";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

// Note :- Api Testing with MSW

/**
 * Mostly we test REST APIs by Mocking
 * MSW stands for Mock Service Worker
 * React Testing Library (RTL) recommend to use MSW
 * We can mock APIs with JEST also.
 */

test("Api Testing with MSW", async () => {
  render(<Class15 />);

  const h = screen.getByRole("heading", { name: /api testing | msw/i });
  expect(h).toBeInTheDocument();
  // const lists = await screen.findAllByRole("listitem", {}, { timeout: 2000 });
  // expect(lists).toHaveLength(10);
});
