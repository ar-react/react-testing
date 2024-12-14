import { useState } from "react";

type Props = {
  name: string;
  testFn?: () => void;
};

export const User = ({ name, testFn }: Props) => {
  return (
    <div>
      <h4>Hello, {name}</h4>
      <button onClick={testFn}>Click Me</button>
    </div>
  );
};

const Class14 = () => {
  const testFn = () => console.log("clicked");

  return (
    <div>
      <h1>Component Testing Testing</h1>
      <User name="Arup" testFn={testFn} />
    </div>
  );
};

export default Class14;
