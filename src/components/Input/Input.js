import React from "react";
import "./Input.css";

const Input = ({
  type,
  onChange,
  children,
  value,
  id,
  name,
  min,
  max,
  style,
  disabled,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      className="input"
      min={min}
      max={max}
      style={style}
      disabled={disabled}
    >
      {children}
    </input>
  );
};

export default Input;
