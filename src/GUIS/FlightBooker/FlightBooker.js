import React from "react";
import { useState } from "react/cjs/react.development";

function isValidDate(dateString) {
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false;
  let parts = dateString.split("/");
  let day = parseInt(parts[1], 10);
  let month = parseInt(parts[0], 10);
  let year = parseInt(parts[2], 10);
  if (year < 1000 || year > 3000 || month === 0 || month > 12) return false;
  let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
    monthLength[1] = 29;
  return day > 0 && day <= monthLength[month - 1];
}

const FlightBooker = () => {
  const [flightType, setFlightType] = useState("oneWay");
  const [flightStart, setFlightStart] = useState("12/12/2021");
  const [flightEnd, setFlightEnd] = useState("12/12/2021");
  const [disableBooking, setDisableBooking] = useState(false);

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

  function handleDateChange(date) {
    if (isValidDate(date)) {
      setDisableBooking(false);
      if (date.target.name === "flightStart") {
        return setFlightStart(date);
      }
      return setFlightEnd(date);
    } else {
      setDisableBooking(true);
    }
  }

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
        <input
          value={flightStart}
          name="flightStart"
          onChange={(e) => handleDateChange(e.target.value)}
        ></input>
        <br />
        <input
          disabled={flightType === "oneWay" && true}
          value={flightEnd}
          name="flightEnd"
        ></input>
      </form>
      <button onClick={handleBooking} disabled={disableBooking}>Book</button>
    </>
  );
};

export default FlightBooker;
