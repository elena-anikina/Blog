import React from 'react';
import classes from './article-preview.module.scss';
import TextPreview from './text-preview/text-preview';
import User from '../../user/user';
import { IArticle } from '../../../types/data';
import {IUser} from "../../../types/data";

interface IArticlePreviewProps extends IArticle {
    preview: boolean,
    user: null | IUser,
    handleLike: (slug, favorited) => void,
}

const ArticlePreview: React.FC<IArticlePreviewProps> = ({ preview, handleLike, user, ...article }) => {
  return (
    <div className={classes.articlePreview}>
      <TextPreview preview={preview} handleLike={handleLike} user={user} {...article}  />
      <User {...article} user={user} />
    </div>
  );
};


export default ArticlePreview;
