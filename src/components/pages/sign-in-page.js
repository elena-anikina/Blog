import React from "react";
import classes from '../form/form.module.scss';
import Input from "../form/input";
import Button from "../form/button";
import AdditionalText from "../form/additional-text";

const SignInPage = () => {
    return (
        <div className={classes.formProfile }>
            <h1 className={classes.heading}>Sign In</h1>
            <form className={classes.form}>
                <Input label="Email address" />
                <Input label="Password"/>
                <Button value="Login" />
                <AdditionalText {...{text: "Don’t have an account? Sign Up.", linkWord: "Sign Up", linkTo: "/"}} />
            </form>
        </div>
    );
};

export default SignInPage;