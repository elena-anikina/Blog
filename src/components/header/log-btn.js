import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.scss';
import deleteLocalStorageArticleValues from '../../helpers/deleteLocalStorageArticleValues';

const LogBtn = ({ text, link, style }) => {
  const classNames = [classes.btn];
  if (style) {
    classNames.push(classes[style]);
  }

  return (
    <>
      <Link to={link} className={classNames.join(' ')}>
        <button type="button" onClick={deleteLocalStorageArticleValues}>
          {text}
        </button>
      </Link>
    </>
  );
};

export default LogBtn;
