import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Article from '../article/article';
import * as actions from '../../redux/actions';

const ArticlePage = ({ articles, fetchArticles, getArticleForEditing }) => {
  if (!articles.length) {
    fetchArticles();
  }

  const { slug } = useParams();

  useEffect(() => {
    getArticleForEditing(slug);
  }, [getArticleForEditing, slug]);

  const [article] = [...articles].filter((el) => el.slug === slug);

  return !!article && <Article {...article} preview={false} />;
};

ArticlePage.propTypes = {
  articles: PropTypes.instanceOf(Array).isRequired,
  fetchArticles: PropTypes.func.isRequired,
  getArticleForEditing: PropTypes.func.isRequired,
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps, actions)(ArticlePage);
