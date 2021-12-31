import React from "react";
import classes from './header.module.scss';
import Title from "./components/title";
import LogBtn from "./components/log-btn";
import User from "../article/article-preview/user/user";

const HeaderAuthorized = () => {
    return (
        <header>
            <Title />

            <div className={classes.headerButtons}>
                <LogBtn text="Sign In" link="/sign-in" />
                <User username="Ellen" />
                <LogBtn text="Sign Up" link="/sign-up" style="green" />
            </div>

        </header>
    );
};

export default HeaderAuthorized;