import React from "react";
import {re} from "./regex-email";
import {useForm} from "react-hook-form";

const getSignUpValidationOptions = (el) => {
    const {register, formState: {errors}, handleSubmit, reset, watch} = useForm({mode: 'onBlur'});

    return (
        {
            required: 'Поле обязательно для заполнения',
            pattern: {
                value: el.label === "Email address" ? re : null,
                message: 'Неверный мейл'
            },
            minLength: {
                value: el.label === "Username" ? 3 : null,
                message: 'Username должен быть от 3 до 20 символов.'
            },
            maxLength: {
                value: el.label === "Username" ? 20 : null,
                message: 'Username должен быть от 3 до 20 символов.'
            },
            validate: (el.label === "Repeat Password") ? (value) => (value === watch("Password") || 'Email confirmation error!') : null
        }
    );
};

export default getSignUpValidationOptions;