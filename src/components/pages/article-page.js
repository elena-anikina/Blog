import React from "react";
import Article from "../article/article";
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import RealworldApi from "../../services/realworld-api";
const realWorldApi = new RealworldApi();
import * as actions from '../../redux/actions';

const ArticlePage = ({articles, fetchArticles}) => {
   if (!articles.length) {
      console.log('Тревога! Тревога! Нет статей!!!');
      fetchArticles();
   }
   const {slug} = useParams();
   const [article] = [...articles].filter((el) => el.slug === slug);

   console.log(slug);
   console.log(article);
   return articles.length ? <Article {...article} preview={false} /> : null;
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, actions)(ArticlePage);