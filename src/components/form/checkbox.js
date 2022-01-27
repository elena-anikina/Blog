import React from 'react';
import classes from './form.module.scss';

const Checkbox = ({ register, errors }) => {
  // const style = {
  //     border: Object.prototype.hasOwnProperty.call(errors, el.label) ? '1px solid #F5222D' : '1px solid #D9D9D9',
  // };
  const errorMessage = errors['checkbox']?.message && (
    <span className={classes.errorText}>{errors['checkbox'].message}</span>
  );

  const textErrorStyle = {
    width: '100%',
  };
  return (
    <div className={classes.checkbox}>
      <input
        id="agreement"
        type="checkbox"
        defaultChecked
        {...register('checkbox', {
          required: 'Пожалуйста поставьте галочку в поле чекбокс',
        })}
      />
      <span aria-label="checkbox" role="checkbox" tabIndex="0" />
      <label className={classes.checkboxText} htmlFor="agreement">
        I agree to the processing of my personal information
      </label>
      <div style={textErrorStyle} className={classes.errorText}>
        {errorMessage}
      </div>
    </div>
  );
};

export default Checkbox;
