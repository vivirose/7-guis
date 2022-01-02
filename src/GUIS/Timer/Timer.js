import React, { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import BoxLayout from "../../components/BoxLayout/BoxLayout";
import "./Timer.css";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
const Timer = () => {
  const [percentageDone, setPercentageDone] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [progressValue, setProgressValue] = React.useState(10);
  const [allowMove, setAllowMove] = React.useState(false);

  const onMouseMove = (e) => {
    console.log("click", e);
    if (!allowMove) return;
    const position = e.clientX;
    if (position === progressValue) return;
    setProgressValue(position);
  };

  function handleReset() {
    setPercentageDone(0);
    setIsRunning(true);
    setTimeElapsed(0);
  }
  function progress(params) {
    if (percentageDone < 100) {
      setPercentageDone((prev) => prev + 1);
      setTimeElapsed((prev) => prev + 0.3);
    } else {
      setIsRunning(false);
    }
  }
  useInterval(progress, isRunning ? 300 : null);

  return (
    <BoxLayout title={"TIMER"} width="200px">
      <div>
        <label htmlFor="timer">Elapsed time: </label>
        <progress id="timer" value={percentageDone} max="100">
          {percentageDone}
        </progress>
        <p>{timeElapsed.toFixed(1)} s</p>
        <label>Set Duration:</label>
        <progress
          value={progressValue}
          max={100}
          onMouseMove={onMouseMove}
          onMouseDown={() => setAllowMove(true)}
          onMouseUp={() => setAllowMove(false)}
        />
        <br></br>
        <button onClick={handleReset}>Reset Timer</button>
      </div>
    </BoxLayout>
  );
};

export default Timer;
