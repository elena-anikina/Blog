import React from 'react';
import classes from './article.module.scss';
import ArticlePreview from './article-preview/article-preview';
import ArticleBody from './article-body/article-body';

const Article = ({ preview, ...article }) => {
  return (
    <div className={classes.article}>
      <ArticlePreview {...article} />
      <ArticleBody preview={preview} {...article} />
    </div>
  );
};

export default Article;
