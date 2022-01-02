import React from 'react';
import {connect} from "react-redux";
import {useForm} from "react-hook-form";
import classes from "../form/form.module.scss";
import Input from "../form/input";
import Button from "../form/button";
import AdditionalText from "../form/additional-text";
import * as actions from '../../redux/actions';

const SignUpPage = ({signUp, inputChangeSignUp, signUpSubmit}) => {
    const {register, formState: {errors}, handleSubmit, reset} = useForm();
    console.log(errors);
    let style = {
        border: Object.keys(errors).length === 0 ? '1px solid #D9D9D9' : '1px solid red'
    };
    const inputs = signUp.map((el, i) => <Input key={i} el={el} func={inputChangeSignUp} />);
    return (
        <div className={classes.formProfile }>
            <h1 className={classes.heading}>Create new account</h1>
            <form className={classes.form} onSubmit={handleSubmit(() => console.log('Отправка формы'))}>
                {inputs}
                <label htmlFor={signUp[0].label}>{signUp[0].label}</label>
                <input
                    name={signUp[0].label}
                    className={classes.input}
                    placeholder={signUp[0].label}
                    style={style}
                    {...register(signUp[0].label, {
                        required: true
                    })}
                />
                <Button value="Create" />
                <AdditionalText {...{text: "Already have an account? Sign In.", linkWord: "Sign In", linkTo: "/"}} />
            </form>
        </div>
    );
};

const mapStateToProps = ({signUp}) => ({signUp});

export default connect(mapStateToProps, actions)(SignUpPage);