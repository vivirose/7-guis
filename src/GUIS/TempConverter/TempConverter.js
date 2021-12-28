import React, { useState } from "react";

const TempConverter = () => {
  const [celsius, setCelsius] = useState(" ");
  const [fahrenheit, setFahrenheit] = useState(" ");

  function toCelsius(F) {
    setFahrenheit(F);
    F !== "" ? setCelsius(Math.round((F - 32) * (5 / 9))) : setCelsius(" ");
  }

  function toFahrenheit(C) {
    setCelsius(C);
    C !== "" ? setFahrenheit(Math.round(C * (9 / 5) + 32)) : setFahrenheit(" ");
  }

  return (
    <>
      <h2>Temperature Converter</h2>
      <form>
        <input
          type="number"
          id="celsius"
          value={celsius}
          onChange={(e) => toFahrenheit(e.target.value)}
        ></input>
        <label htmlFor="celsius">Celsius =</label>
        <input
          type="number"
          id="fahrenheit"
          value={fahrenheit}
          onChange={(e) => toCelsius(e.target.value)}
        ></input>
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </form>
    </>
  );
};

export default TempConverter;
