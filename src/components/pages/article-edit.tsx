import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ArticleForm from '../article/article-form';
import * as actions from '../../redux/actions';
import { IArticle } from '../../types/data';

interface IArticleEditProps {
  getArticleForEditing: (slug: string) => void;
  article: IArticle;
  editArticle: () => void;
}

const ArticleEdit: React.FC<IArticleEditProps> = ({ getArticleForEditing, article, editArticle }) => {
  const { slug } = useParams();

  useEffect(() => {
    getArticleForEditing(slug);
  }, [getArticleForEditing, slug]);

  return article && <ArticleForm title="Edit article" type="edit" func={editArticle} article={article} />;
};

const mapStateToProps = ({ article }) => ({ article });

export default connect(mapStateToProps, actions)(ArticleEdit);
