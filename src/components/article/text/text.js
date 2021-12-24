import React from "react";
import classes from "./text.module.scss";

const Text = () => {
    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <span className={classes.title}>Some article title</span>
                <div className={classes.likes}>*Likes*</div>
            </div>
            <div className={classes.tags}>
                <span className={classes.tag}>Tag1</span>
                <span className={classes.tag}>Some Tag</span>
            </div>
            <div className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>

    );
};

export default Text;
