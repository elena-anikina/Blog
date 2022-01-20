import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import List from '../list/list';
import Pagination from '../pagination/pagination';
import * as actions from '../../redux/actions';
import { useLocation } from 'react-router-dom';

const HomePage = ({ fetchArticles, checkingAuthentication, user, articlesCount, pagination: { page } }) => {
  const location = useLocation();
  console.log(location.pathname === '/');
  const numberOfArticlesPerPage = 5;
  const limit = page * articlesCount;
  const offset = (page - 1) * numberOfArticlesPerPage;
  useEffect(() => {
    console.log('HomePage UseEffect');
    fetchArticles(5, 0);
  }, [user]);
  return (
    <>
      <List />
    </>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(HomePage);
