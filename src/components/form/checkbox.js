import React, { useState } from 'react';
import classes from './form.module.scss';

const Checkbox = ({ register, errors }) => {
  const errorMessage = errors['checkbox']?.message && (
    <span className={classes.errorText}>{errors['checkbox'].message}</span>
  );

  const textErrorStyle = {
    width: '100%',
  };
  return (
    <div className={classes.checkbox}>
      <input id="agreement" type="checkbox" {...register('checkbox')} />
      <span
        aria-label="checkbox"
        role="checkbox"
        tabIndex="0"
        onClick={() => {
          document.getElementById('label').click();
        }}
      />
      <label id="label" className={classes.checkboxText} htmlFor="agreement" onClick={() => {}}>
        I agree to the processing of my personal information
      </label>
      <div style={textErrorStyle} className={classes.errorText}>
        {errorMessage}
      </div>
    </div>
  );
};

export default Checkbox;
