import React from 'react';
import { useForm } from 'react-hook-form';
import classes from './form.module.scss';

const Input = ({ el }) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const style = {
    border: Object.keys(errors).length === 0 ? '1px solid #D9D9D9' : '1px solid red',
  };
  return (
    <>
      <label htmlFor={el.label}>{el.label}</label>
      <input
        name={el.label}
        className={classes.input}
        placeholder={el.placeholder || el.label}
        style={style}
        {...register(el.label, {
          required: true,
        })}
      />
    </>
  );
};

export default Input;
