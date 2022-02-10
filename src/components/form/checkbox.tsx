import React from 'react';
import classes from './form.module.scss';
import {ValidationMessage} from "./validation-message";

interface ICheckboxProps {
    register: (inputName) => object,
    errors: object
}


const Checkbox: React.FC<ICheckboxProps> = ({ register, errors }) => {

  return (
    <div className={classes.checkbox}>
      <input id="agreement" type="checkbox" {...register('checkbox')} />
      <span
        aria-label="checkbox"
        role="checkbox"
        tabIndex={0}
        onClick={() => {
          document.getElementById('label').click();
        }}
      />
      <label id="label" className={classes.checkboxText} htmlFor="agreement" onClick={() => {}}>
        I agree to the processing of my personal information
      </label>
      <div className={classes.errorText}>
          <ValidationMessage errors={errors} input='checkbox' />
      </div>
    </div>
  );
};

export default Checkbox;
