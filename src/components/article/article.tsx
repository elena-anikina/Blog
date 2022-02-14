import React from 'react';
import classes from './article.module.scss';
import ArticlePreview from './article-preview/article-preview';
import ArticleBody from './article-body/article-body';
import { IArticle } from '../../types/data';

interface IArticleProps extends IArticle {
  preview: boolean;
}

const Article: React.FC<IArticleProps> = ({ preview, ...article }) => {
  return (
    <div className={classes.article}>
      <ArticlePreview preview={true} {...article} />
      <ArticleBody preview={preview} {...article} />
    </div>
  );
};

export default Article;
