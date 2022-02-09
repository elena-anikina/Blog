import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HeaderNotAuthorized from './header-not-authorized';
import HeaderAuthorized from './header-authorized';
import * as actions from '../../redux/actions';
import { IUser } from '../../types/data';

interface IHeaderProps {
  user: IUser | null;
  checkingAuthentication: () => void;
  logOut: () => void;
}

const Header: React.FC<IHeaderProps> = ({ user, checkingAuthentication, logOut }) => {
  useEffect(() => {
    checkingAuthentication();
  }, []);

  return user ? <HeaderAuthorized {...user} logOut={logOut} /> : <HeaderNotAuthorized />;
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, actions)(Header);
