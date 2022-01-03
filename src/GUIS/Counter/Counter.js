import React, { useState } from "react";
import BoxLayout from "../../components/BoxLayout/BoxLayout";
import Button from "../../components/Button/Button";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <BoxLayout title={"COUNTER"} width="350px">
      <div className="counter">
        <h2>{count}</h2>
        <Button onClick={handleClick} text="COUNT" />
      </div>
    </BoxLayout>
  );
};

export default Counter;
