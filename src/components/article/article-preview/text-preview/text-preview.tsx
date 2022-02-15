import React from 'react';
import classes from './text-preview.module.scss';
import likeFalse from './like-false.svg';
import likeTrue from './like-true.svg';
import { Link } from 'react-router-dom';
import { info } from '../../../../helpers/resultPopus';
import {IArticle} from "../../../../types/data";

interface ITextPreviewProps extends IArticle {
    preview?: boolean,
    user: any,
    handleLike: (slug, favorited) => void,
}

const TextPreview: React.FC<ITextPreviewProps> = ({ title, favoritesCount, tagList = [], description, slug, user, favorited, handleLike }) => {

  const tags = tagList.map((tag, i) => tag.trim() ? (<span key={i} className={classes.tag}>{tag}</span>) : null);

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Link className={classes.title} to={`/articles/${slug}`}>
          {title}
        </Link>
        <div className={classes.likes}>
          <div
            className={classes.like}
            onClick={ () => { user ? handleLike(slug, favorited) : info()} }
          >
            <img src={favorited ? likeTrue : likeFalse} alt="like" />

          </div>
          <span className={classes.likesNumber}>{favoritesCount}</span>
        </div>
      </div>
      <div className={classes.tags}>{tags}</div>
      <div className={classes.text}>{description}</div>
    </div>
  );
};


export default TextPreview;
