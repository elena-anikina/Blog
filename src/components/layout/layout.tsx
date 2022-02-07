import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './layout.module.scss';
import Header from '../header/header';

const Layout: React.FC = () => (
  <>
    <Header />
    <main className={classes.main}>
      <Outlet />
    </main>
  </>
);

export default Layout;
