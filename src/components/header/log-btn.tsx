import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.scss';
import deleteLocalStorageArticleValues from '../../helpers/deleteLocalStorageArticleValues';
import classNames from 'classnames';

interface ILogBtnProps {
  text: string;
  link: string;
  style: string | null;
}

const LogBtn: React.FC<ILogBtnProps> = ({ text, link, style }) => {
  const classesBtn = classNames(classes.btn, { [`${classes[style]}`]: style });

  return (
    <>
      <Link to={link} className={classesBtn}>
        <button type="button" onClick={deleteLocalStorageArticleValues}>
          {text}
        </button>
      </Link>
    </>
  );
};

export default LogBtn;
