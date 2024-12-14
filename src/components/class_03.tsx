import { useState } from "react";

const Class03 = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
};

export default Class03;
