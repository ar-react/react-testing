import { useEffect, useState } from "react";

type Obj = {
  id: number;
  name: string;
};

const Class15 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const allApi = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
    };

    allApi();
  }, []);

  return (
    <div>
      <h1>API Testing | MSW</h1>

      <ul>
        {data.map((item: Obj) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Class15;
