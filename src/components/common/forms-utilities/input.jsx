import React from "react";
import "./form-utilities.scss";

const Input = ({ name, label, ...rest }) => {
  return (
    <div className="field-wrapper">
      { label && (
        <label htmlFor={name}>{label}</label>
      )}
      <input {...rest} name={name} id={name} />
    </div>
  );
};

export default Input;
