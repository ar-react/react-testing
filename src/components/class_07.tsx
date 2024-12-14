import { useState } from "react";

export const sayHi = () => {
  // if any fun does not asociated with component's states or props, simply
  // make it a separate function and test it separately. or put it inside another
  // file and import it here.
  return "HI";
};

const Class07 = () => {
  const [data, setData] = useState("");

  const handleChange = () => {
    setData("Hello World");
  };

  return (
    <div>
      <h1>Functional Component method testing.</h1>
      <button data-testid="btn1" onClick={handleChange}>
        Update
      </button>
      <button onClick={sayHi}>Say Hi</button>
      <h2>{data}</h2>
    </div>
  );
};

export default Class07;
