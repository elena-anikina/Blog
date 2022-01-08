import React, {useEffect} from "react";
import classes from './form.module.scss';
import Button from "./button";
import {Link} from 'react-router-dom';


const ResultMessage = ({heading, text, navFunc}) => {
    useEffect(() => {
        setTimeout(() => navFunc(), 1500)
    }, []);
    return (
        <div className={`${classes.formProfile} ${classes.message}`}>
            <h1 className={classes.heading}>{heading}</h1>
            <span className={classes.form}>{text}</span>
            <Link className={classes.btn} to="/">
                <input className={classes.btnTextSuccess} type="button" value="Go to Home Page" />
            </Link>
        </div>
    );
};

export default ResultMessage;