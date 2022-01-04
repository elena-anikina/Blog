import React from "react";
import classes from './header.module.scss';
import Title from "./components/title";
import LogBtn from "./components/log-btn";
import User from "../user/user";

const HeaderAuthorized = ({username, image}) => {
    const author = {username, image};
    return (
        <header>
            <Title />

            <div className={`${classes.headerButtons} ${classes.authorized}`}>
                <LogBtn text="Create article" link="/" />
                <User author={author} />
                <LogBtn text="Log Out" link="/sign-up" style="green" />
            </div>

        </header>
    );
};

export default HeaderAuthorized;