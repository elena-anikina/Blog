import React from 'react';
import classes from './list.module.scss';
import Article from '../article/article';
import Pagination from '../pagination/pagination';
import Loader from '../loader/loader';
import { IArticle } from '../../types/data';

interface IListProps {
  articles: IArticle[];
  errorMessages: null | object;
  articlesCount: number;
}

const List: React.FC<IListProps> = ({ articles: data, errorMessages, articlesCount }) => {
  const articles = data.map((article) => <Article key={article.slug} {...article} preview />);
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
