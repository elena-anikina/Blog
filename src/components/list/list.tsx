import React from 'react';
import classes from './list.module.scss';
import Article from '../article/article';
import Pagination from '../pagination/pagination';
import Loader from '../loader/loader';
import { IArticle } from '../../types/data';
import {IUser} from "../../types/data";

interface IListProps {
  articles: IArticle[],
  errorMessages: null | object,
  articlesCount: number,
  user: null | IUser,
  handleLike: (slug, favorited) => void
}

const List: React.FC<IListProps> = ({ articles: data, handleLike, errorMessages, articlesCount, user }) => {
  const articles = data.map((article) => <Article key={article.slug} {...article} handleLike={handleLike} preview user={user} />);
  const pagination = articlesCount > 5 && <Pagination />;
  const loader = !data.length && !errorMessages && <Loader />;

  return (
    <section className={classes.articlesAll}>
      {loader}
      {articles}
      {pagination}
    </section>
  );
};

export default List;
