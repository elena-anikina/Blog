import React from "react";
import classes from "./form.module.scss";
import getSignUpValidationOptions from "../../helpers/getSignUpValidationOptions";

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

export const getStandardInput = (label, placeholder, errors, register) => {
    return (
        <div key={label} className={classes.form}>
            <label>{label}
                <input
                    style={getValidationStyleForInput(errors, label)}
                    className={classes.input}
                    placeholder={placeholder || label}
                    {...register(label, {...getSignUpValidationOptions(label)})}
                />
                {getErrorMessage(errors, label)}
            </label>
        </div>
    );
};