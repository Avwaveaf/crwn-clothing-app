import React from "react";

import "./form-input.style.scss";

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className='group'>
      <input onChange={handleChange} {...otherProps} className='form-input' />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
