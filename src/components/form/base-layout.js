import React from "react";
import classes from './form.module.scss';

const BaseLayout = ({heading, children}) => {
    return (
        <div className={classes.formProfile}>
            <h1 className={classes.heading}>{heading}</h1>
            {children}
        </div>
    );
};

export default BaseLayout;