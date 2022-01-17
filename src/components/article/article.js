import React from 'react';
import classes from './article.module.scss';
import TextPreview from './article-preview/text-preview/text-preview';
import User from '../user/user';
import ArticlePreview from './article-preview/article-preview';
import ArticleBody from './article-body/article-body';
import { useLocation, useParams } from 'react-router-dom';

const Article = ({ preview, ...article }) => {
  const location = useLocation();
  const { slug } = useParams();

  return (
    <div className={classes.article}>
      <ArticlePreview {...article} />
      <ArticleBody preview={preview} {...article} />
    </div>
  );
};

export default Article;
