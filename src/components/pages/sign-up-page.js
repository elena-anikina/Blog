import React from 'react';
import {connect} from "react-redux";
import classes from "../form/form.module.scss";
import Input from "../form/input";
import Button from "../form/button";
import AdditionalText from "../form/additional-text";
import * as actions from '../../redux/actions';

const SignUpPage = ({signUp, inputChangeSignUp, signUpSubmit}) => {
    const inputs = signUp.map((el, i) => <Input key={i} {...el} func={inputChangeSignUp} />);
    return (
        <div className={classes.formProfile }>
            <h1 className={classes.heading}>Create new account</h1>
            <form className={classes.form} onSubmit={signUpSubmit}>
                {inputs}
                <Button value="Create" />
                <AdditionalText {...{text: "Already have an account? Sign In.", linkWord: "Sign In", linkTo: "/"}} />
            </form>
        </div>
    );
};

const mapStateToProps = ({signUp}) => ({signUp});

export default connect(mapStateToProps, actions)(SignUpPage);