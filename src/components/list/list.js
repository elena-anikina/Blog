import React, { useEffect, useState } from 'react';
import classes from './list.module.scss';
import Article from '../article/article';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Pagination from '../pagination/pagination';
import Loader from '../loader/loader';
import { fetchArticles } from '../../redux/actions';

const List = ({
  fetchArticles,
  articles: data,
  calcPagination,
  user,
  checkingAuthentication,
  errorMessages,
  pagination: { trimStart, trimEnd, ...details },
  articlesCount,
}) => {
  console.log(articlesCount);

  const articles = data.map((article) => <Article key={article.slug} {...article} preview />);
  // const articles5 = articles.slice(trimStart, trimEnd);
  const pagination =
    articlesCount > 5 ? (
      <Pagination
        data={data}
        func={calcPagination}
        fetchArticles={fetchArticles}
        details={details}
        articlesCount={articlesCount}
      />
    ) : null;
  const loader = !data.length && !errorMessages ? <Loader /> : null;

  return (
    <section className={classes.articlesAll}>
      {loader}
      {articles}
      {pagination}
    </section>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(List);
