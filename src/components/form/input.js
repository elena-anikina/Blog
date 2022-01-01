import React from 'react';
import classes from './form.module.scss';

const Input = ({label, placeholder, value, func}) => {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <input
                    name={label}
                    className={classes.input}
                    placeholder={placeholder || label}
                    value={value}
                    onChange={func}
            />
        </>
    );
}

export default Input;