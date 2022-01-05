import React from 'react';
import {connect} from "react-redux";
import {useForm} from "react-hook-form";
import classes from "../form/form.module.scss";
import Button from "../form/button";
import AdditionalText from "../form/additional-text";
import * as actions from '../../redux/actions';
import {re} from "../../helpers/regex-email";
import Checkbox from "../form/checkbox";
import getSignUpValidationOptions from "../../helpers/getSignUpValidationOptions";

const SignUpPage = ({signUp, signUpSubmit}) => {

    const {register, formState: {errors}, handleSubmit, reset, watch} = useForm({mode: 'onBlur'});

    const watchPassword = watch('Password');
    console.log(watchPassword);

    const inputs = signUp.map((el) => {
        let style = { border: errors.hasOwnProperty(el.label) ? '1px solid #F5222D' : '1px solid #D9D9D9' };
        const errorMessage = errors[el.label]?.message && <span className={classes.errorText}>{errors[el.label].message}</span>;
        return (
            <div key={el.label} className={classes.form}>
            <label>{el.label}
                <input
                    className={classes.input}
                    placeholder={el.placeholder || el.label}
                    style={style}
                    {...register(el.label, {...getSignUpValidationOptions(el.label, watchPassword)})}
                />
                <div className={classes.errorText}>{errorMessage}</div>
            </label>
            </div>
        );
    });
    return (
        <div className={classes.formProfile }>
            <h1 className={classes.heading}>Create new account</h1>
            <form className={classes.form} onSubmit={handleSubmit(signUpSubmit)}>
                {inputs}
                <Checkbox />
                <Button value="Create" />
                <AdditionalText {...{text: "Already have an account? Sign In.", linkWord: "Sign In", linkTo: "/sign-in"}} />
            </form>
        </div>
    );
};

const mapStateToProps = ({signUp}) => ({signUp});

export default connect(mapStateToProps, actions)(SignUpPage);