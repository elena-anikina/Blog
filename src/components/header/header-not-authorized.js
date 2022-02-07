import React from 'react';
import classes from './header.module.scss';
import Title from './title';
import LogBtn from './log-btn';

const HeaderNotAuthorized = () => (
  <header>
    <Title />

    <div className={`${classes.headerButtons} ${classes.headerNotAuthorized}`}>
      <LogBtn text="Sign In" link="/sign-in" />
      <LogBtn text="Sign Up" link="/sign-up" style="green" />
    </div>
  </header>
);

export default HeaderNotAuthorized;
