import React from "react";
import "./Input.css";

const Input = ({
  type,
  onChange,
  value,
  id,
  name,
  min,
  max,
  disabled,
  invalid
}) => {
  let className = "input"
  //when error in input, change background color
  className += invalid ? " input-invalid": "";
  //by default, input has paading, so it has to be removed when type is range
  className += (type === "range") ? " input-range" : "";

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      className={className}
      min={min}
      max={max}
      disabled={disabled}

    />
  );
};

export default Input;
