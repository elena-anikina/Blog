import React from 'react';
import classes from './article-preview.module.scss';
import TextPreview from './text-preview/text-preview';
import User from '../../user/user';

const ArticlePreview = ({ preview, ...article }) => {
  return (
    <div className={classes.articlePreview}>
      <TextPreview {...article} preview={preview} />
      <User {...article} />
    </div>
  );
};

export default ArticlePreview;
