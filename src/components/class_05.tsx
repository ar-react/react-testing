import { useState } from "react";

const Class04 = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <h1>Click Event Testing</h1>
      <button onClick={() => setData("clicked")}>ClickMe</button>
      <p>{data}</p>
    </div>
  );
};

export default Class04;
