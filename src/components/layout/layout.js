import React from "react";
import classes from './layout.module.scss';
import Header from "../header/header";
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <main className={classes.main}>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;