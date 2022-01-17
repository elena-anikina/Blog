import React from 'react';
import classes from './form.module.scss';

const Checkbox = () => {
  return (
    <div className={classes.checkbox}>
      <input id="agreement" type="checkbox" defaultChecked />
      <span aria-label="checkbox" role="checkbox" tabIndex="0" />
      <label className={classes.checkboxText} htmlFor="agreement">
        I agree to the processing of my personal information
      </label>
    </div>
  );
};

export default Checkbox;
