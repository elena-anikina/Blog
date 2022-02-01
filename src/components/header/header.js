import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HeaderNotAuthorized from './header-not-authorized';
import HeaderAuthorized from './header-authorized';
import * as actions from '../../redux/actions';

const Header = ({ authorized, user, checkingAuthentication, logOut }) => {
  useEffect(() => {
    checkingAuthentication();
  }, []);
  return user ? <HeaderAuthorized {...user} logOut={logOut} /> : <HeaderNotAuthorized />;
};

const mapStateToProps = ({ authorized, user }) => ({ authorized, user });

export default connect(mapStateToProps, actions)(Header);
