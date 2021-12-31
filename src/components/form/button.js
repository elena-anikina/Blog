import React from "react";
import classes from './form.module.scss';

const Button = ({value}) => {
    return (
        <input type="button" className={classes.btn} value={value} />
    );
};

export default Button;