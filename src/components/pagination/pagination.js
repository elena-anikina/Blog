import React from 'react';
import classes from './pagination.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import arrow1 from './arrow1.svg';
import arrow2 from './arrow2.svg';
import { fetchArticles } from '../../redux/actions';

const Pagination = ({
  data,
  func,
  details: { page, arrowStart, arrowEnd },
  articlesCount,
  fetchArticles,
  pagination: { trimStart, trimEnd },
}) => {
  console.log(articlesCount);
  const numberOfArticlesPerPage = 5;
  const numberOfPages = Math.ceil(articlesCount / numberOfArticlesPerPage);

  const pagination = Array.from({ length: numberOfPages }, (v, k) => k + 1);

  const paginationRender = pagination.slice(0, 5).map((el, i) => {
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

  const classNamesStart = arrowStart ? `${classes.arrow1} ${classes.activeArrow}` : classes.arrow1;
  const classNamesEnd = arrowEnd ? `${classes.arrow2} ${classes.activeArrow}` : classes.arrow2;

  return (
    <div className={classes.pagination}>
      <button className={classNamesStart} />
      {paginationRender}
      <button className={classNamesEnd} />
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Pagination);
