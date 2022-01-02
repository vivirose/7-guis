import React, { useState } from "react";
import BoxLayout from "../../components/BoxLayout/BoxLayout";

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
    <BoxLayout title={"TEMPERATURE CONVERTER"} width="500px">
      <form className="temperature_form">
        <label htmlFor="celsius">
          <input
            type="number"
            id="celsius"
            value={celsius}
            onChange={(e) => toFahrenheit(e.target.value)}
          ></input>
          Celsius =
        </label>
        <label htmlFor="fahrenheit">
          <input
            type="number"
            id="fahrenheit"
            value={fahrenheit}
            onChange={(e) => toCelsius(e.target.value)}
          ></input>
          Fahrenheit
        </label>
      </form>
    </BoxLayout>
  );
};

export default TempConverter;
