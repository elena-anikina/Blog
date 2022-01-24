import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './pagination.module.scss';

const PaginationArrRender = ({ pagination: { page, trimStart }, articlesCount, calcPagination, fetchArticles }) => {
  const numberOfPages = Math.ceil(articlesCount / 5);
  const pagination = Array.from({ length: numberOfPages }, (value, key) => key + 1);
  return pagination.slice(trimStart, trimStart + 5).map((el) => {
    const paginationClasses = [classes.paginationBtn];
    if (el === page) {
      paginationClasses.push(classes.active);
    }

    const onPaginationClick = (event) => {
      const { textContent: num } = event.target;
      calcPagination(event);
      fetchArticles(5, (num - 1) * 5);
    };

    return (
      <button type="button" key={el} className={paginationClasses.join(' ')} onClick={onPaginationClick}>
        {el}
      </button>
    );
  });
};

const mapStateToProps = ({ pagination, articlesCount }) => ({ pagination, articlesCount });

export default connect(mapStateToProps, actions)(PaginationArrRender);
