import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, inputOptions }) => {
  return (
    <div className="group">
      <input {...inputOptions} className="form-input" />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
