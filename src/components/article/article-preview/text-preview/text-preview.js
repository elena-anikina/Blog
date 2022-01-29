import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import classes from './text-preview.module.scss';
// import likeTrue from './like-true.svg';
import { ReactComponent as LikeFalse } from './like-false.svg';
import { ReactComponent as LikeTrue } from './like-true.svg';

import { Link } from 'react-router-dom';
import { success, error, info } from '../../../../helpers/resultPopus';
import { realWorldApi } from '../../../../services/realworld-api';
import * as actions from '../../../../redux/actions';
import { fetchArticles } from '../../../../redux/actions';

const TextPreview = ({ title, favoritesCount, tagList = [], description, slug, id, user, favorited, handleLike }) => {
  let like = favorited ? <LikeTrue /> : <LikeFalse />;

  const tags = tagList.map((tag, i) =>
    tag.trim() ? (
      <span key={i} className={classes.tag}>
        {tag}
      </span>
    ) : null
  );

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Link className={classes.title} to={`/articles/${slug}`}>
          {title}
        </Link>
        <div className={classes.likes}>
          <div
            className={classes.like}
            onClick={() => {
              user ? handleLike(slug, favorited) : info();
            }}
          >
            {like}
          </div>
          <span className={classes.likesNumber}>{favoritesCount}</span>
        </div>
      </div>
      <div className={classes.tags}>{tags}</div>
      <div className={classes.text}>{description}</div>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(TextPreview);
