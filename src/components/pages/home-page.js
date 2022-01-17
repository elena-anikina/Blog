import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import List from '../list/list';
import Pagination from '../pagination/pagination';
import * as actions from '../../redux/actions';

const HomePage = ({ fetchArticles, checkingAuthentication, user }) => {
  useEffect(() => {
    console.log('HomePage UseEffect');
    fetchArticles();
  }, [user]);
  return (
    <>
      <List />
    </>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(HomePage);
