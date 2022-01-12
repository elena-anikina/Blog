import React, {useEffect} from "react";
import classes from '../form/form.module.scss';
import ArticleForm from "../article/article-form";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from '../../redux/actions';
import RealworldApi from "../../services/realworld-api";
const realWorldApi = new RealworldApi();

const ArticleEdit = ({getArticleForEditing, article}) => {

    const {slug, title, description, body} = article;

    return <ArticleForm
                        title="Edit article"
                        tagsNum={3}
                        type="edit"
                        articleData={article}
                        func={() => console.log('hello')} />
};

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, actions)(ArticleEdit);