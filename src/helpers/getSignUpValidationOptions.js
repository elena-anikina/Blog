import React from 'react';
import { re, reUrl } from './regex-email';
import { useForm } from 'react-hook-form';

const getSignUpValidationOptions = (label, watchPassword) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({ mode: 'onBlur' });

  // return (
  //     {
  //         required: 'Поле обязательно для заполнения',
  //         pattern: {
  //             value: el === "Email address" ? re : null,
  //             message: 'Неверный мейл'
  //         },
  //         minLength: {
  //             value: el === "Username" ? 3 : null,
  //             message: 'Username должен быть от 3 до 20 символов.'
  //         },
  //         maxLength: {
  //             value: el === "Username" ? 20 : null,
  //             message: 'Username должен быть от 3 до 20 символов.'
  //         },
  //         validate: (el === "Repeat Password") ? (value) => (value === watch("Password") || 'Email confirmation error!') : null
  //     }
  // );

  switch (label) {
    case 'Email address':
      return {
        required: 'Поле обязательно для заполнения',
        pattern: { value: re, message: 'Email должен быть корректным почтовым адресом' },
      };

    case 'Username':
      return {
        required: 'Поле обязательно для заполнения',
        minLength: { value: 3, message: 'Username должен быть от 3 до 20 символов' },
        maxLength: { value: 20, message: 'Username должен быть от 3 до 20 символов' },
      };

    case 'Password':
      return {
        required: 'Поле обязательно для заполнения',
      };

    case 'Repeat Password':
      return {
        required: 'Поле обязательно для заполнения',
        validate: (value) => {
          console.log(value);
          return value === watchPassword || 'Password и Repeat Password должны совпадать';
        },
      };

    case 'New password':
      return {
        minLength: { value: 6, message: 'New password должен быть от 6 до 40 символов' },
        maxLength: { value: 40, message: 'New password должен быть от 6 до 40 символов' },
      };

    case 'Avatar image (url)':
      return {
        pattern: { value: reUrl, message: 'Avatar image должен быть корректным url' },
      };

    case 'Title':
    case 'Short description':
    case 'Text':
      return {
        required: 'Поле обязательно для заполнения',
      };
  }
};

export default getSignUpValidationOptions;
