import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { useState } from 'react';
import classes from '../form/form.module.scss';
import { articleNew } from '../form/labels';
import { useForm } from 'react-hook-form';
import getSignUpValidationOptions from '../../helpers/getSignUpValidationOptions';
import { articleDefaultValues } from '../../helpers/articleDefaultValues';
import { getValidationStyleForInput } from '../form/getRedValidationStyleForInput';
import { getErrorMessage } from '../form/getRedValidationStyleForInput';
import ArticleForm from '../article/article-form';
import RealworldApi from '../../services/realworld-api';
import { addTag } from '../../redux/actions';
import { useLocation, useNavigate } from 'react-router-dom';
const realWorldApi = new RealworldApi();

const ArticleNew = ({ newArticle, tagsNew, addTag }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const navFunc = () => {
    console.log('inside navFunc');
    navigate(fromPage);
  };

  const handleTagsFunc = (i, action) => {
    console.log('действие с тегами', i, action);
  };
  return (
    <ArticleForm
      title="Create new article"
      type="new"
      tags={tagsNew}
      handleTagsFunc={handleTagsFunc}
      addTagFunc={addTag}
      func={newArticle}
    />
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(ArticleNew);
