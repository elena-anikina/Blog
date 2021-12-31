import React from 'react';
import classes from './form.module.scss';

const Input = ({label, placeholder}) => {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <input name={label} className={classes.input} placeholder={placeholder || label}/>
        </>
    );
}

export default Input;