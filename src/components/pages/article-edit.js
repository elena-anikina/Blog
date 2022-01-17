import React, { useEffect } from 'react';
import classes from '../form/form.module.scss';
import ArticleForm from '../article/article-form';
import { useLocation, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import RealworldApi from '../../services/realworld-api';
import { editArticle } from '../../redux/actions';
const realWorldApi = new RealworldApi();

const ArticleEdit = ({ getArticleForEditing, article, editArticle, tagsNew, addTag }) => {
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    getArticleForEditing(slug);
  }, []);

  return article ? (
    <ArticleForm
      title="Edit article"
      type={article ? 'edit' : 'new'}
      //    articleData={article}
      func={editArticle}
    />
  ) : null;
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(ArticleEdit);
