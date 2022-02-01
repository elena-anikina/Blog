import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './pagination.module.scss';
import * as actions from '../../redux/actions';
import PaginationArrRender from './paginationArrRender';
import classNames from 'classnames';

const Pagination = ({
  pagination: { page },
  articlesCount,
  fetchArticles,
  paginationArrowRight,
  paginationArrowLeft,
}) => {
  const numberOfPages = Math.ceil(articlesCount / 5);
  const paginationArrRender = <PaginationArrRender />;

  const isEndArrowTrue = page < numberOfPages;

  const classNamesStart = classNames(classes.arrow1, { [`${classes.activeArrow}`]: page > 1 });
  const classNamesEnd = classNames(classes.arrow2, { [`${classes.activeArrow}`]: isEndArrowTrue });

  const articlesPerPage = 5;
  const howManyArticlesToFetch = 5;

  return (
    <div className={classes.pagination}>
      <button
        className={classNamesStart}
        type="button"
        aria-label="button left"
        onClick={() => {
          if (page > 1) {
            const howManyArticlesToSkip = (page - 2) * articlesPerPage;
            fetchArticles(howManyArticlesToFetch, howManyArticlesToSkip);
            paginationArrowLeft();
          }
        }}
      />
      {paginationArrRender}
      <button
        className={classNamesEnd}
        type="button"
        aria-label="button right"
        onClick={() => {
          if (isEndArrowTrue) {
            paginationArrowRight();
            const howManyArticlesToSkip = page * articlesPerPage;
            fetchArticles(howManyArticlesToFetch, howManyArticlesToSkip);
          }
        }}
      />
    </div>
  );
};

Pagination.propTypes = {
  paginationArrowLeft: PropTypes.func.isRequired,
  paginationArrowRight: PropTypes.func.isRequired,
  articlesCount: PropTypes.number.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    page: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(Pagination);
