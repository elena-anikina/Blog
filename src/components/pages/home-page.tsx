import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from '../list/list';
import * as actions from '../../redux/actions';

const HomePage = ({ fetchArticles, user }) => {
  useEffect(() => {
    fetchArticles(5, 0);
  }, [user, fetchArticles]);

  return <List />;
};

HomePage.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object),
};

HomePage.defaultProps = {
  user: {},
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, actions)(HomePage);
