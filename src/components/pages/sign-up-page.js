import React from 'react';
import classes from "../form/form.module.scss";
import Input from "../form/input";
import Button from "../form/button";
import AdditionalText from "../form/additional-text";

const SignUpPage = () => {
    return (
        <div className={classes.formProfile }>
            <h1 className={classes.heading}>Create new account</h1>
            <form className={classes.form}>
                <Input label="Username" />
                <Input label="Email address"/>
                <Input label="Password"/>
                <Input label="Repeat Password" placeholder="Password"/>
                <Button value="Create" />
                <AdditionalText {...{text: "Already have an account? Sign In.", linkWord: "Sign In", linkTo: "/"}} />
            </form>
        </div>
    );
};

export default SignUpPage;