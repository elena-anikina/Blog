import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import List from '../list/list';
import * as actions from '../../redux/actions';
import {IUser, IArticle} from "../../types/data";

interface IHomePageProps {
  fetchArticles: (limit: number, offset: number) => void,
  user: null | IUser,
  articles: IArticle[],
  errorMessages: null | object,
  articlesCount: number
}

const HomePage: React.FC<IHomePageProps> = ({ fetchArticles, user, articles, errorMessages, articlesCount }) => {
  useEffect(() => {
    fetchArticles(5, 0);
  }, [user, fetchArticles]);

  return <List
              articles={articles}
              errorMessages={errorMessages}
              articlesCount={articlesCount}
          />;
};


const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(HomePage);
