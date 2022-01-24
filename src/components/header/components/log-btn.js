import React from 'react';
import classes from '../header.module.scss';
import { Link } from 'react-router-dom';
import deleteLocalStorageArticleValues from '../../../helpers/deleteLocalStorageArticleValues';

const LogBtn = ({ text, link, style, func }) => {
  let classNames = [classes.btn];
  if (style) {
    classNames.push(classes[style]);
  }

  return (
    <>
      <Link to={link} className={classNames.join(' ')}>
        <button onClick={deleteLocalStorageArticleValues}>{text}</button>
      </Link>
    </>
  );
};

export default LogBtn;
