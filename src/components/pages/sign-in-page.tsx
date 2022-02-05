import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as actions from '../../redux/actions';
import { signInSchema } from '../../helpers/schemaFormValidation';
import classes from '../form/form.module.scss';
import Button from '../form/button';
import BaseLayout from '../form/base-layout';
import { signInLabels } from '../form/labels';

const SignInPage = ({ signInSubmit }) => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(signInSchema),
  });

  const inputs = signInLabels.map((el) => {
    const style = {
      border: Object.prototype.hasOwnProperty.call(errors, el) ? '1px solid #F5222D' : '1px solid #D9D9D9',
    };
    const errorMessage = errors[el]?.message && <span className={classes.errorText}>{errors[el].message}</span>;
    return (
      <div key={el} className={classes.form}>
        <label>
          {el}
          <input className={classes.input} placeholder={el} style={style} {...register(el)} />
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
      <span className={classes.additionalText}>
        Don’t have an account?&nbsp;<Link to="/">Sign Up</Link>.
      </span>
    </BaseLayout>
  );

  return signInForm;
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(SignInPage);
