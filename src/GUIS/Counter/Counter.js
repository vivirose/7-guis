import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h2>Counter</h2>
      <h2>{count}</h2>
      <button onClick={handleClick}>Count</button>
    </>
  );
};

export default Counter;
