import React from 'react';
import classes from './form.module.scss';
import getValidationStyleInput from '../../helpers/getValidationStyleInput';


export const getErrorMessage = (errors, label) => {
  return (
    <div className={classes.errorText}>
      {errors[label]?.message && <span className={classes.errorText}>{errors[label].message}</span>}
    </div>
  );
};

export const getStandardInput = (label, placeholder, errors, register) => (
  <div key={label} className={classes.form}>
    <label>
      {label}
      <input
        style={getValidationStyleInput(errors, label)}
        className={classes.input}
        placeholder={placeholder || label}
        {...register(label, {
          onChange: (event) => {
            localStorage.setItem(label, event.target.value);
          },
        })}
      />
      {getErrorMessage(errors, label)}
    </label>
  </div>
);
