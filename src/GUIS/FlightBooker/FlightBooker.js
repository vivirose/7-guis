import React from "react";
import { useState } from "react/cjs/react.development";

const FlightBooker = () => {
  const [flightType, setFlightType] = useState("oneWay");
  const [flightStart, setFlightStart] = useState("12.12.2021");
  const [flightEnd, setFlightEnd] = useState("12.12.2021");

  function handleTypeChange(e) {
    setFlightType(e.target.value);
  }

  function handleBooking() {
    if (flightType === "oneWay") {
      return alert(`You have booked a one-way flight for ${flightStart}`);
    } else {
      return alert(
        `You have booked a return flight from ${flightStart} to ${flightEnd}`
      );
    }
  }

  //function handleDateChange(){

  //}
  return (
    <>
      <h2>Flight Booker</h2>
      <form>
        <select onChange={handleTypeChange}>
          <option value="oneWay">One-way Flight</option>
          <option value="return">Return Flight</option>
        </select>
      </form>
      <form>
        <input value={flightStart}></input> <br />
        <input
          disabled={flightType === "oneWay" && true}
          value={flightEnd}
        ></input>
      </form>
      <button onClick={handleBooking}>Book</button>
    </>
  );
};

export default FlightBooker;
