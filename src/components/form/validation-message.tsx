import React from 'react';
import classes from './form.module.scss';

export const ValidationMessage = ({errors, input}) => {
    return errors[input]?.message ? <span className={classes.errorText}>{errors[input].message}</span> : null;
};