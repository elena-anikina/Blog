import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import classes from './text-preview.module.scss';
import likeFalse from '../like-false.svg';
import likeTrue from '../like-true.svg';
import { Link } from 'react-router-dom';
import { success, error, info } from '../../../../helpers/resultPopus';
import RealworldApi from '../../../../services/realworld-api';
const realWorldApi = new RealworldApi();
import * as actions from '../../../../redux/actions';
import { fetchArticles } from '../../../../redux/actions';

const TextPreview = ({ title, favoritesCount, tagList = [], description, slug, id, user, favorited, handleLike }) => {
  let likeImg = favorited ? likeTrue : likeFalse;

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
          <img
            onClick={() => {
              user ? handleLike(slug, favorited) : info();
            }}
            src={likeImg}
            alt=""
            className={classes.like}
          />
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
