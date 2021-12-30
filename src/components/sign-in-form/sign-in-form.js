import React from "react";
import classes from  './sign-in-form.module.scss';
import {Link} from "react-router-dom";

const SignInForm = () => {
    return (
        <div className={classes.signIn}>
            <h1 className={classes.heading}>Sign In</h1>
            <form className={classes.form}>
                <label htmlFor="email">Email address</label>
                <input name="email" className={classes.input} placeholder="Email address"/>
                <label htmlFor="password">Password</label>
                <input name="password" className={classes.input} placeholder="Password"/>

                <input type="button" className={classes.btn} value="Login"/>
                <span className={classes.signUpOffer}>Don’t have an account? <Link to="/" className={classes.signUp}>Sign Up.</Link></span>
            </form>
        </div>
    );
};

export default SignInForm;