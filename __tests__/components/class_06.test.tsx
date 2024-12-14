import { fireEvent, render, screen } from "@testing-library/react";
import Class06 from "../../src/components/class_06";

// Note :- Snapshot Testing
test("snapshot testing for class_06 component", () => {
  const container = render(<Class06 />);
  expect(container).toMatchSnapshot(); // this will create a snapshot of the component, and keep it inside __snapshots__ folder, if in future any changes are made to the component, it will compare the changes with the snapshot and let you know if the changes are intended or not.
});

// press u to update the snapshot
