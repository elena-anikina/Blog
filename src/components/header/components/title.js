import React from "react";
import classes from '../header.module.scss';
import {Link} from "react-router-dom";

const Title = () => {
    return (
        <Link className={classes.title} to="/" style={{ textDecoration: 'none' }}>
            Realworld Blog
        </Link>
    );
};

export default Title;