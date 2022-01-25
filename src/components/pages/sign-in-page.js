import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as actions from '../../redux/actions';
import classes from '../form/form.module.scss';
import Button from '../form/button';
import AdditionalText from '../form/additional-text';
import getSignUpValidationOptions from '../../helpers/getSignUpValidationOptions';
import BaseLayout from '../form/base-layout';
import { signInLabels } from '../form/labels';

const SignInPage = ({ signInSubmit }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const inputs = signInLabels.map((el) => {
    const style = {
      border: Object.prototype.hasOwnProperty.call(errors, el) ? '1px solid #F5222D' : '1px solid #D9D9D9',
    };
    const errorMessage = errors[el]?.message && <span className={classes.errorText}>{errors[el].message}</span>;
    return (
      <div key={el} className={classes.form}>
        <label>
          {el}
          <input
            className={classes.input}
            placeholder={el}
            style={style}
            {...register(el, { ...getSignUpValidationOptions(el) })}
          />
          <div className={classes.errorText}>{errorMessage}</div>
        </label>
      </div>
    );
  });

  const navFunc = () => {
    navigate(fromPage);
  };

  const onSubmit = (data) => {
    signInSubmit(data, reset, navigate, fromPage, navFunc);
  };

  const signInForm = (
    <BaseLayout heading="Sign in">
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {inputs}
        <Button value="Login" />
      </form>
      <AdditionalText {...{ text: 'Don’t have an account? Sign Up.', linkWord: ' Sign Up', linkTo: '/' }} />
    </BaseLayout>
  );

  return signInForm;
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(SignInPage);
