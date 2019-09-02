import React from "react";
import "./form-utilities.scss";

const Input = ({ name, label, error, ...rest }) => {
  const hasErrorstyle = error ? ' has-error ' : '';
  return (
    <div className={"field-wrapper" + hasErrorstyle}>
      { label && (
        <label htmlFor={name}>{label}</label>
      )}
      <input {...rest} name={name} id={name} />
      { !(name === 'password') &&
      <p className="error">{error}</p>
      }
    </div>
  );
};

export default Input;
