import React, {useEffect} from "react";
import classes from '../form/form.module.scss';
import {useForm} from "react-hook-form";
import getSignUpValidationOptions from "../../helpers/getSignUpValidationOptions";
import Checkbox from "../form/checkbox";
import Button from "../form/button";
import AdditionalText from "../form/additional-text";
import {connect} from "react-redux";
import * as actions from '../../redux/actions';


const EditProfile = ({user, checkingAuthentication}) => {
    const {register, formState: {errors}, handleSubmit, reset, watch} = useForm({mode: 'onBlur'});

    const inputs = [
        ['Username', user?.username || ''],
        ['Email address', user?.email || ''],
        ['New password', ''],
        ['Avatar image (url)', user?.image || '']].map((el) => {
        let style = { border: errors.hasOwnProperty(el[0]) ? '1px solid #F5222D' : '1px solid #D9D9D9' };
        const errorMessage = errors[el[0]]?.message && <span className={classes.errorText}>{errors[el[0]].message}</span>;
        return (
            <div key={el[0]} className={classes.form}>
                <label>{el[0]}
                    <input
                        className={classes.input}
                        placeholder={el[0]}
                        style={style}
                        defaultValue={el[1]}
                        {...register(el[0], {...getSignUpValidationOptions(el[0])})}
                    />
                    <div className={classes.errorText}>{errorMessage}</div>
                </label>
            </div>
        );
    });
    return (
        <div className={classes.formProfile }>
            <h1 className={classes.heading}>Edit Profile</h1>
            <form className={classes.form} onSubmit={handleSubmit(() => {console.log('edit profile save')})}>
                {inputs}
                <Button value="Save" />
            </form>
        </div>
    );
};

const mapStateToProps = ({user}) => ({user});

export default connect(mapStateToProps, actions)(EditProfile);