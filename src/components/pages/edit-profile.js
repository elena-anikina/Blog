import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import classes from '../form/form.module.scss';
import getSignUpValidationOptions from '../../helpers/getSignUpValidationOptions';
import Button from '../form/button';
import * as actions from '../../redux/actions';
import { editProfileLabels } from '../form/labels';

const EditProfile = ({ user, editProfile }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      Username: user?.username,
      'Email address': user?.email,
      'New password': '',
      'Avatar image (url)': user?.image,
    },
  });

  const inputs = editProfileLabels.map((el) => {
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
            ref={register}
            {...register(el, { ...getSignUpValidationOptions(el) })}
          />
          <div className={classes.errorText}>{errorMessage}</div>
        </label>
      </div>
    );
  });

  return (
    <div className={classes.formProfile}>
      <h1 className={classes.heading}>Edit Profile</h1>
      <form className={classes.form} onSubmit={handleSubmit(editProfile)}>
        {inputs}
        <Button value="Save" />
      </form>
    </div>
  );
};

EditProfile.propTypes = {
  user: PropTypes.instanceOf(Object),
  editProfile: PropTypes.func.isRequired,
};

EditProfile.defaultProps = {
  user: {},
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, actions)(EditProfile);
