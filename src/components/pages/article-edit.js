import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ArticleForm from '../article/article-form';
import * as actions from '../../redux/actions';

const ArticleEdit = ({ getArticleForEditing, article, editArticle }) => {
  const { slug } = useParams();

  useEffect(() => {
    getArticleForEditing(slug);
  }, [getArticleForEditing, slug]);

  return article && <ArticleForm title="Edit article" type="edit" func={editArticle} />;
};

ArticleEdit.propTypes = {
  article: PropTypes.instanceOf(Object),
  getArticleForEditing: PropTypes.func.isRequired,
  editArticle: PropTypes.func.isRequired,
};

ArticleEdit.defaultProps = {
  article: {},
};

const mapStateToProps = ({ article }) => ({ article });

export default connect(mapStateToProps, actions)(ArticleEdit);
