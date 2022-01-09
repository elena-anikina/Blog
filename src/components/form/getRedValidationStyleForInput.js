import React from "react";
import classes from "./form.module.scss";

export const getValidationStyleForInput = (errors, label) => {
    return {
        border: errors.hasOwnProperty(label) ? '1px solid #F5222D' : '1px solid #D9D9D9'
    }
};

export const getErrorMessage = (errors, label) => {
    return (
        <div className={classes.errorText}>
            {errors[label]?.message && <span className={classes.errorText}>{errors[label].message}</span>}
        </div>
    );
};

