import React from "react";
import "./Input.css";

export const Input = ({
  defaultValue,
  disabled,
  label,
  name = "input",
  onChange,
  type = "text",
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        defaultValue={defaultValue}
        type={type}
        id={label}
        name={name}
        onChange={onChange}
        className={type === "number" ? "no-spinner" : ""}
        disabled={disabled}
      />
    </div>
  );
};
