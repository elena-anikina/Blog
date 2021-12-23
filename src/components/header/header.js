import React from "react";
import classes from './header.module.scss';

const Header = () => {
    return (
        <header>
            <div className={classes.title}>Realworld Blog</div>
            <div className={classes.loginButtons}>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </header>
    );
};

export default Header;