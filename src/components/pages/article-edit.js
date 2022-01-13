import React, {useEffect} from "react";
import classes from '../form/form.module.scss';
import ArticleForm from "../article/article-form";
import {useLocation, useParams} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from '../../redux/actions';
import RealworldApi from "../../services/realworld-api";
const realWorldApi = new RealworldApi();

const ArticleEdit = ({getArticleForEditing, article, editArticle}) => {

    const {pathname} = useLocation();
    console.log(pathname);

    const {slug} = article;
    console.log(slug);


    return <ArticleForm
                        title="Edit article"
                        tagsNum={3}
                        type="edit"
                        articleData={article}
                        func={(data) => {
                        console.log(data);
                        editArticle(slug, data);
                        }
                        } />
};

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, actions)(ArticleEdit);