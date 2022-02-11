import React from 'react';
import classes from './form.module.scss';
import getValidationStyleInput from '../../helpers/getValidationStyleInput';
import { ValidationMessage } from './validation-message';

export const getStandardInput = (label, placeholder, errors, register) => {
  const errorMessage = <ValidationMessage errors={errors} input={label} />;

  return (
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
        <div className={classes.errorText}>{errorMessage}</div>
      </label>
    </div>
  );
};
