import React from "react";
import {Link} from "react-router-dom";
import classes from './header.module.scss';

const Header = () => {
    return (
        <header>
            <Link className={classes.title} to="/" style={{ textDecoration: 'none' }}>
                Realworld Blog
            </Link>
            <div className={classes.loginButtons}>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </header>
    );
};

export default Header;