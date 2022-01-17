import React from 'react';
import { connect } from 'react-redux';
import classes from './header.module.scss';
import Title from './components/title';
import LogBtn from './components/log-btn';
import User from '../user/user';
import { Link } from 'react-router-dom';

const HeaderAuthorized = ({ username, image, logOut }) => {
  const userImage = image ? image : 'https://api.realworld.io/images/smiley-cyrus.jpeg';
  return (
    <header>
      <Title />

      <div className={`${classes.headerButtons} ${classes.authorized}`}>
        <LogBtn text="Create article" link="/article-new" />

        <div className={classes.userContainer}>
          <div className={classes.userNameContainer}>
            <Link to="/edit-profile" onClick={() => console.log('username click')} className={classes.userNameHeader}>
              {username}
            </Link>
          </div>
          <Link to="/edit-profile">
            <img className={classes.avatarHeader} src={userImage} alt="" />
          </Link>
        </div>

        <button className={`${classes.btn} ${classes.green}`} onClick={logOut}>
          Log Out
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HeaderAuthorized);
