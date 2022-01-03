import React, { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import BoxLayout from "../../components/BoxLayout/BoxLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
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
  const [duration, setDuration] = useState(30);

  function handleReset() {
    setPercentageDone(0);
    setIsRunning(true);
    setTimeElapsed(0);
  }
  function progress(params) {
    if (percentageDone < duration) {
      setPercentageDone((prev) => prev + 1);
      setTimeElapsed((prev) => prev + 1);
    } else {
      setIsRunning(false);
    }
  }

  function handleDurationChange(e) {
    setDuration(e.target.value);
  }

  useInterval(progress, isRunning ? 1000 : null);

  return (
    <BoxLayout title={"TIMER"} width="200px">
      <div>
        <label htmlFor="timer">Elapsed time: </label>
        <progress id="timer" value={percentageDone} max={duration}>
          {percentageDone}
        </progress>
        <p>{timeElapsed} s</p>
        <div>
          <label>Set Duration:</label>
          <Input
            type="range"
            id="duration"
            name="duration"
            min="0"
            max="30"
            value={duration}
            step="1"
            style={{ padding: 0, border: 0 }}
            onChange={(e) => {
              handleDurationChange(e);
            }}
          />
        </div>
        <p>{duration}</p>
        <br />
        <Button onClick={handleReset} text="RESET TIMER" />
      </div>
    </BoxLayout>
  );
};

export default Timer;
