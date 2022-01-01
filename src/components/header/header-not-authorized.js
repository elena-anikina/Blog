import React from 'react';
import classes from './header.module.scss';
import Title from "./components/title";
import LogBtn from "./components/log-btn";

const HeaderNotAuthorized = () => {
    return (
        <header>
            <Title />

            <div className={`${classes.headerButtons} ${classes.headerNotAuthorized}`}>
                <LogBtn text="Sign In" link="/sign-in" />
                <LogBtn text="Sign Up" link="/sign-up" style="green" />
            </div>

        </header>
    );
};

export default HeaderNotAuthorized;