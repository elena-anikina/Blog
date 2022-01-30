import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './pagination.module.scss';
import * as actions from '../../redux/actions';
import PaginationArrRender from './paginationArrRender';

const Pagination = ({
  pagination: { page },
  articlesCount,
  fetchArticles,
  paginationArrowRight,
  paginationArrowLeft,
}) => {
  const numberOfPages = Math.ceil(articlesCount / 5);
  const paginationArrRender = <PaginationArrRender />;

  const isEndArrowTrue = numberOfPages % 5 ? page <= numberOfPages - (numberOfPages % 5) : page <= numberOfPages - 5;
  const isStartArrowTrue = page > 5;

  const classNamesStart = isStartArrowTrue ? `${classes.arrow1} ${classes.activeArrow}` : classes.arrow1;
  const classNamesEnd = isEndArrowTrue ? `${classes.arrow2} ${classes.activeArrow}` : classes.arrow2;

  const articlesPerPage = 5;
  const howManyArticlesToFetch = 5;

  return (
    <div className={classes.pagination}>
      <button
        className={classNamesStart}
        type="button"
        aria-label="button left"
        onClick={() => {
          if (isStartArrowTrue) {
            const howManyArticlesToSkip = (page - 1 - 5) * articlesPerPage;
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
            const howManyArticlesToSkip = (page - 1 + 5) * articlesPerPage;
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
