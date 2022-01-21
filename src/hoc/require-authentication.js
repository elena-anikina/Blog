import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const RequireAuthentication = ({ children, user }) => {
  const location = useLocation();

  if (!user && !localStorage.getItem('token')) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
};

const mapStateToProps = (state) => state;

RequireAuthentication.propTypes = {
  children: PropTypes.elementType.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(RequireAuthentication);
