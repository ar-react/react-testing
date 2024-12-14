const Class09 = () => {
  return (
    <div>
      <h1>RTL Query getByTestId | getAllByTestId</h1>
      <div>
        <button data-testid="button1">Click Me 1</button>
        <button data-testid="button2">Click Me 2</button>
      </div>

      <div>
        <ul>
          <li data-testid="list">List 1</li>
          <li data-testid="list">List 2</li>
          <li data-testid="list">List 3</li>
        </ul>
      </div>

      <input
        type="text"
        defaultValue={"Arup"}
        name="name"
        className="form-controll"
        id="username"
      />
      <span title="arup">arup</span>
      <img alt="this is image" />
    </div>
  );
};

export default Class09;
