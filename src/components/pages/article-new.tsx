import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import ArticleForm from '../article/article-form';

const ArticleNew = ({ newArticle }) => <ArticleForm title="Create new article" type="new" func={newArticle} />;

ArticleNew.propTypes = {
  newArticle: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, actions)(ArticleNew);
