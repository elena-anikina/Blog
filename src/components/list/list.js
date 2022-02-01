import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './list.module.scss';
import Article from '../article/article';
import * as actions from '../../redux/actions';
import Pagination from '../pagination/pagination';
import Loader from '../loader/loader';

const List = ({ articles: data, errorMessages, articlesCount }) => {
  console.log(data);

  const articles = data.map((article) => <Article key={article.slug} {...article} preview />);
  const pagination = articlesCount > 5 && <Pagination />;
  const loader = !data.length && !errorMessages && <Loader />;

  return (
    <section className={classes.articlesAll}>
      {loader}
      {articles}
      {pagination}
    </section>
  );
};

List.propTypes = {
  articles: PropTypes.instanceOf(Array),
  errorMessages: PropTypes.instanceOf(Object),
  articlesCount: PropTypes.number.isRequired,
};

List.defaultProps = {
  articles: [],
  errorMessages: {},
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(List);
