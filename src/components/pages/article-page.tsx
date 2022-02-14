import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Article from '../article/article';
import * as actions from '../../redux/actions';
import { IArticle } from '../../types/data';
import {IUser} from "../../types/data";

interface IArticlePageProps {
  articles: IArticle[],
  fetchArticles: any,
  getArticleForEditing: any,
  user: null | IUser,
}

const ArticlePage: React.FC<IArticlePageProps> = ({ articles, fetchArticles, getArticleForEditing, user }) => {

  if (!articles.length) { fetchArticles() }

  const { slug } = useParams();

  useEffect(() => { getArticleForEditing(slug) }, [getArticleForEditing, slug]);

  const [article] = [...articles].filter((el) => el.slug === slug);

  return article ? <Article {...article} preview={false} user={user} /> : null;
};

const mapStateToProps = ({ articles, user }) => ({ articles, user });

export default connect(mapStateToProps, actions)(ArticlePage);
