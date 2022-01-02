import React, { useState } from "react";
import BoxLayout from "../../components/BoxLayout/BoxLayout";
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <BoxLayout title={"COUNTER"} width="350px">
      <div className="counter">
      <h2>{count}</h2>
      <button onClick={handleClick}>COUNT</button>
      </div>
    </BoxLayout>
  );
};

export default Counter;
