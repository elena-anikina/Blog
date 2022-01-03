import React from "react";
import classes from '../form/form.module.scss';
import Button from "../form/button";
import AdditionalText from "../form/additional-text";
import {useForm} from "react-hook-form";
import {re} from "../../helpers/regex-email";

const SignInPage = () => {
    const {register, formState: {errors}, handleSubmit, reset, watch} = useForm({
        mode: 'onBlur'
    });
    const inputs = ['Email address', 'Password'].map((el, i) => {
        console.log(errors);
        let style = {
            border: errors.hasOwnProperty(el) ? '1px solid #F5222D' : '1px solid #D9D9D9'
        };
        const errorMessage = (errors[el]?.message) && (<span className={classes.errorText}>{errors[el].message}</span>);
        return (
            <div key={el} className={classes.form}>
                <label>{el}
                    <input
                        className={classes.input}
                        placeholder={el}
                        style={style}
                        {...register(el, {
                            required: 'Поле обязательно для заполнения',
                            pattern: {
                                value: el === 'Email address' ? re : null,
                                message: 'Неверный мейл'
                            }
                        })}
                    />
                    <div className={classes.errorText}>{errorMessage}</div>
                </label>
            </div>
        );
    });
    return (
        <div className={classes.formProfile }>
            <h1 className={classes.heading}>Sign In</h1>
            <form className={classes.form} onSubmit={handleSubmit(() => (console.log('отправка формы')))}>
                {inputs}
                <Button value="Login" />
                <AdditionalText {...{text: "Don’t have an account? Sign Up.", linkWord: "Sign Up", linkTo: "/"}} />
            </form>
        </div>
    );
};

export default SignInPage;