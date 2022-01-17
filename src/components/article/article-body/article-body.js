import React from 'react';
import ReactMarkdown from 'react-markdown';
import classes from './article-body.module.scss';

const ArticleBody = ({ preview, ...article }) => {
  const { body } = article;
  const fullText = !preview ? body : null;
  return <ReactMarkdown className={classes.fullText}>{fullText}</ReactMarkdown>;
};

export default ArticleBody;
