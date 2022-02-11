import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import ArticleForm from '../article/article-form';
import {IArticle} from "../../types/data";

interface IArticleNewProps {
  newArticle: any,
  article: null | IArticle
}

const ArticleNew: React.FC<IArticleNewProps> = ({ newArticle, article }) => (
  <ArticleForm title="Create new article" type="new" func={newArticle} article={article} />
);

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(ArticleNew);
