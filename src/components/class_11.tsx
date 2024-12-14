import { useEffect, useState } from "react";

const Class11 = () => {
  const [data, setData] = useState(false);
  const isLogin = true;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(true);
    }, 1000);

    () => clearTimeout(timeout);
  });

  return (
    <div>
      <h1>queryby and queryByAll Testing</h1>
      {isLogin ? <button>Logout</button> : <button>Login</button>}

      {data ? <h1>data is loaded</h1> : <h1>loading...</h1>}
    </div>
  );
};

export default Class11;
