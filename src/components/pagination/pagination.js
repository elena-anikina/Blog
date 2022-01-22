import React from 'react';
import classes from './pagination.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import arrow1 from './arrow1.svg';
import arrow2 from './arrow2.svg';
import { paginationArrowLeft } from '../../redux/actions';

const Pagination = ({
  data,
  func,
  details: { page, arrowStart, arrowEnd },
  articlesCount,
  fetchArticles,
  pagination: { trimStart, trimEnd },
  paginationArrowRight,
  paginationArrowLeft,
}) => {
  console.log(articlesCount);
  const numberOfArticlesPerPage = 5;
  const numberOfPages = Math.ceil(articlesCount / numberOfArticlesPerPage);

  const pagination = Array.from({ length: numberOfPages }, (v, k) => k + 1);

  const paginationRender = pagination.slice(trimStart, trimEnd).map((el, i) => {
    let paginationClasses = [classes.paginationBtn];
    if (el === page) {
      paginationClasses.push(classes.active);
    }

    const onPaginationClick = (event) => {
      const { textContent: page } = event.target;
      func(event);
      fetchArticles(5, (page - 1) * numberOfArticlesPerPage);
    };

    return (
      <button key={i} className={paginationClasses.join(' ')} onClick={onPaginationClick}>
        {el}
      </button>
    );
  });

  const isEndArrowTrue = numberOfPages % 5 ? page <= numberOfPages - (numberOfPages % 5) : page <= numberOfPages - 5;
  // page + 5 < numerOfPages
  const isStartArrowTrue = page > 5;

  const classNamesStart = isStartArrowTrue ? `${classes.arrow1} ${classes.activeArrow}` : classes.arrow1;
  const classNamesEnd = isEndArrowTrue ? `${classes.arrow2} ${classes.activeArrow}` : classes.arrow2;

  return (
    <div className={classes.pagination}>
      <button
        className={classNamesStart}
        type="button"
        aria-label="button left"
        onClick={() => {
          if (isStartArrowTrue) {
            paginationArrowLeft();
          }
        }}
      />
      {paginationRender}
      <button
        className={classNamesEnd}
        type="button"
        aria-label="button right"
        onClick={() => {
          if (isEndArrowTrue) {
            paginationArrowRight();
          }
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(Pagination);
