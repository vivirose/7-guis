import React, { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
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
      //   if (savedCallback.current() > 99){
      //     clearInterval()
      //   };
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
const Timer = () => {
  const [percentageDone, setPercentageDone] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  console.log(percentageDone);
  function handleReset() {
    setPercentageDone(0);
    setIsRunning(true);
  }
  function progress(params) {
    if (percentageDone < 100) {
      setPercentageDone((prev) => prev + 1);
    } else {
      setIsRunning(false);
      console.log("after100");
    }
  }
  useInterval(progress, isRunning ? 100 : null);

  //   useEffect(() => {
  //     const timer = window.setInterval(() => {
  //         debugger;
  //       if (percentageDone < 10) {
  //         setPercentageDone((prev) => prev + 1);
  //       }
  //     }, 100);
  //     return () => {
  //       window.clearInterval(timer);
  //     };
  //   }, []);

  return (
    <>
      <h2>Timer</h2>
      <p>Elapsed time: </p>
      <div className="progress_bar">
        <div
          className="progress"
          style={{
            width: `${percentageDone}%`,
          }}
        ></div>
      </div>
      <p>Duration: </p>
      <div className="progress_bar">
        <div className="progress"></div>
      </div>
      <button onClick={handleReset}>Reset Timer</button>
    </>
  );
};

export default Timer;
