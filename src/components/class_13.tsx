import { useState } from "react";

const Class13 = () => {
  const [data, setData] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <h1>User Event Testing</h1>
      <button id="myButton" onClick={() => setData("hello")}>
        Submit
      </button>
      <h2>{data}</h2>

      <div>
        <h1>{name}</h1>
        <input
          type="text"
          value={name}
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Class13;
