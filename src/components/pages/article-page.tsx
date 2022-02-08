import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Article from '../article/article';
import * as actions from '../../redux/actions';
import { IArticle } from '../../types/data';

interface IArticlePageProps {
  articles: IArticle[];
  fetchArticles: any;
  getArticleForEditing: any;
}

const ArticlePage: React.FC<IArticlePageProps> = ({ articles, fetchArticles, getArticleForEditing }) => {
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

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps, actions)(ArticlePage);
