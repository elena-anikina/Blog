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
                <Link to="/sign-in" className={classes.btn}>
                    <button>Sign In</button>
                </Link>

                <Link to="/sign-in" className={classes.btn}>
                    <button>Sign Up</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;