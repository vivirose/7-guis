import React from "react";
import { useState } from "react/cjs/react.development";
import BoxLayout from "../../components/BoxLayout/BoxLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./FlightBooker.css";

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

  function handleDateChange(e) {
    if (isValidDate(e.target.value)) {
      setDisableBooking(false);
    } else {
      setDisableBooking(true);
    }
    if (e.target.name === "flightStart") {
      return setFlightStart(e.target.value);
    }
    return setFlightEnd(e.target.value);
  }

  return (
    <BoxLayout title={"FLIGHT BOOKER"} width="350px">
      <div className="flightBooker">
        <form>
          <select onChange={handleTypeChange}>
            <option value="oneWay">One-way Flight</option>
            <option value="return">Return Flight</option>
          </select>
        </form>
        <form>
          <Input
            value={flightStart}
            name="flightStart"
            onChange={handleDateChange}
            style={{ backgroundColor: disableBooking && "#EE4C73" }}
          />
          <br />
          <Input
            disabled={flightType === "oneWay" && true}
            value={flightEnd}
            name="flightEnd"
            onChange={handleDateChange}
            style={{ backgroundColor: disableBooking && "#EE4C73" }}
          />
        </form>
        <Button onClick={handleBooking} disabled={disableBooking} text="BOOK" />
      </div>
    </BoxLayout>
  );
};

export default FlightBooker;
