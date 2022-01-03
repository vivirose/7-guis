import React, { useState } from "react";
import BoxLayout from "../../components/BoxLayout/BoxLayout";
import Input from "../../components/Input/Input";

function toCelsius(F) {
  return Math.round((F - 32) * (5 / 9));
}

function toFahrenheit(C) {
  return Math.round(C * (9 / 5) + 32);
}

const TempConverter = () => {
  const [celsius, setCelsius] = useState(" ");
  const [fahrenheit, setFahrenheit] = useState(" ");


  function handleChangeTemperature(e) {
    let currentCelsius = "";
    let currentFahrenheit = "";
    const {value} = e.target;
    if (value) {
      if (e.target.name === "celsius") {
        currentCelsius = value;
        currentFahrenheit = toFahrenheit(value);
      } else {
        currentFahrenheit =value;
        currentCelsius = toCelsius(value);
      }
    } 
    setCelsius(currentCelsius);
    setFahrenheit(currentFahrenheit)
  }

  return (
    <BoxLayout title="TEMPERATURE CONVERTER" width="500px">
      <form className="temperature_form">
        <label htmlFor="celsius">
          <Input
            type="number"
            id="celsius"
            name="celsius"
            value={celsius}
            onChange={(e) => handleChangeTemperature(e)}
          />
          Celsius =
        </label>
        <label htmlFor="fahrenheit">
          <Input
            type="number"
            name="fahrenheit"
            id="fahrenheit"
            value={fahrenheit}
            onChange={(e) => handleChangeTemperature(e)}
          />
          Fahrenheit
        </label>
      </form>
    </BoxLayout>
  );
};

export default TempConverter;
