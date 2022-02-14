import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editProfileSchema } from '../../helpers/schemaFormValidation';
import classes from '../form/form.module.scss';
import Button from '../form/button';
import * as actions from '../../redux/actions';
import { editProfileLabels } from '../form/labels';
import { useLocation, useNavigate } from 'react-router-dom';
import BaseLayout from '../form/base-layout';

const EditProfile = ({ user, editProfile }) => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const fromPage: any = location.state?.from?.pathname || '/';

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      Username: user?.username,
      'Email address': user?.email,
      'New password': '',
      'Avatar image (url)': user?.image,
    },
  });

  const inputs = editProfileLabels.map((el: any) => {
    const style = {
      border: Object.prototype.hasOwnProperty.call(errors, el) ? '1px solid #F5222D' : '1px solid #D9D9D9',
    };
    const errorMessage = errors[el]?.message && <span className={classes.errorText}>{errors[el].message}</span>;

    return (
      <div key={el} className={classes.form}>
        <label>
          {el}
          <input className={classes.input} placeholder={el} style={style} ref={register} {...register(el)} />
          <div className={classes.errorText}>{errorMessage}</div>
        </label>
      </div>
    );
  });

  const navFunc = () => {
    navigate(fromPage);
  };

  const onSubmit = (data) => {
    editProfile(data, navFunc);
  };

  return (
    <BaseLayout heading="Edit Profile">
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {inputs}
        <Button value="Save" />
      </form>
    </BaseLayout>
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
