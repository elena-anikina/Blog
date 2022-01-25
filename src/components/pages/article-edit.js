import React, { useEffect } from 'react';
import ArticleForm from '../article/article-form';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const ArticleEdit = ({ getArticleForEditing, article, editArticle }) => {
  const { slug } = useParams();

  useEffect(() => {
    getArticleForEditing(slug);
  }, []);

  return article ? <ArticleForm title="Edit article" type={article ? 'edit' : 'new'} func={editArticle} /> : null;
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(ArticleEdit);
