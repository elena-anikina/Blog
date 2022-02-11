import React from 'react';
import classes from './form.module.scss';
import classNames from 'classnames';

interface IButtonProps {
  value: string;
}

const Button: React.FC<IButtonProps> = ({ value }) => {
  const classNamesBtn = classNames(classes.btn, { [`${classes.btnArticle}`]: value === 'Send' });
  return <input type="submit" className={classNamesBtn} value={value} />;
};

export default Button;
