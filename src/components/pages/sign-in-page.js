import React, {useEffect} from "react";
import {connect} from "react-redux";
import * as actions from '../../redux/actions';
import classes from '../form/form.module.scss';
import Button from "../form/button";
import AdditionalText from "../form/additional-text";
import {useForm} from "react-hook-form";
import {re} from "../../helpers/regex-email";
import getSignUpValidationOptions from "../../helpers/getSignUpValidationOptions";
import BaseLayout from "../form/base-layout";
import ResultMessage from "../form/result-message";
import {useLocation, useNavigate} from 'react-router-dom';
import {signInLabels} from "../form/labels";

const SignInPage = ({signInSubmit, user, errorMessages}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';

    console.log(location);


    const {register, formState: {errors}, handleSubmit, reset, watch} = useForm({mode: 'onBlur'});

    const inputs = signInLabels.map((el, i) => {
        let style = { border: errors.hasOwnProperty(el) ? '1px solid #F5222D' : '1px solid #D9D9D9' };
        const errorMessage = (errors[el]?.message) && (<span className={classes.errorText}>{errors[el].message}</span>);
        return (
            <div key={el} className={classes.form}>
                <label>
                    {el}
                    <input
                        className={classes.input}
                        placeholder={el}
                        style={style}
                        {...register(el, {...getSignUpValidationOptions(el)})}
                    />
                    <div className={classes.errorText}>{errorMessage}</div>
                </label>
            </div>
        );
    });

    const navFunc = () => {
        console.log('inside navFunc')
        navigate(fromPage);
    };

    const onSubmit = (data) => {
        console.log(errorMessages)
        signInSubmit(data, reset, navigate, fromPage)
    };

    const signInForm = (
        <BaseLayout heading={`Sign IN, ${fromPage}`}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                {inputs}
                <Button value="Login" />
            </form>
            <AdditionalText {...{text: "Don’t have an account? Sign Up.", linkWord: " Sign Up", linkTo: "/"}} />
        </BaseLayout>
    );

    const resultSuccess = <ResultMessage navFunc={navFunc} heading="You're lucky!" text="You logged in successfully!" />

    return user ? resultSuccess : signInForm;
};

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, actions)(SignInPage);