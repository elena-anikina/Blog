import React from 'react';
import classes from './article.module.scss';
import ArticlePreview from './article-preview/article-preview';
import ArticleBody from './article-body/article-body';
import { IArticle } from '../../types/data';
import {IUser} from "../../types/data";

interface IArticleProps extends IArticle {
  preview: boolean,
  user: null | IUser
}

const Article: React.FC<IArticleProps> = ({ preview, user, ...article }) => {
  return (
    <div className={classes.article}>
      <ArticlePreview preview={true} user={user} {...article} />
      <ArticleBody preview={preview} {...article} />
    </div>
  );
};

export default Article;
