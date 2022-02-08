import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import ArticleForm from '../article/article-form';

interface IArticleNewProps {
  newArticle: any;
}

const ArticleNew: React.FC<IArticleNewProps> = ({ newArticle }) => (
  <ArticleForm title="Create new article" type="new" func={newArticle} />
);

export default connect(null, actions)(ArticleNew);
