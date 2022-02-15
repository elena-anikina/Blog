import React from 'react';
import ReactMarkdown from 'react-markdown';
import classes from '../article.module.scss';
import {IArticle} from "../../../types/data";

interface IArticleBodyProps extends IArticle {
  preview: boolean,
}

const ArticleBody: React.FC<IArticleBodyProps> = ({ preview, ...article }) => {
  const { body } = article;
  const fullText = !preview ? body : null;
  return <ReactMarkdown className={classes.fullText}>{fullText}</ReactMarkdown>;
};

export default ArticleBody;
