import React from 'react';
import classes from './form.module.scss';
import { Link } from 'react-router-dom';

const AddLink = ({ text, linkWord, linkTo }) => {
  const arr = text.split(linkWord);
  return (
    <>
      {arr.slice(0, 1)}
      <Link to={linkTo} className={classes.signUp}>
        {linkWord}
      </Link>
      {arr.slice(1, 2)}
    </>
  );
};

const AdditionalText = ({ ...additionalText }) => {
  return (
    <span className={classes.additionalText}>
      <AddLink {...additionalText} />
    </span>
  );
};

export default AdditionalText;
