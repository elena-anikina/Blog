import React from "react";
import classes from '../form/form.module.scss';
import {articleNew} from "../form/labels";
import {useForm} from "react-hook-form";
import getSignUpValidationOptions from "../../helpers/getSignUpValidationOptions";
import {articleDefaultValues} from "../../helpers/articleDefaultValues";
import {getValidationStyleForInput} from "../form/getRedValidationStyleForInput";
import {getErrorMessage} from "../form/getRedValidationStyleForInput";
import ArticleForm from "../article/article-form";
import RealworldApi from "../../services/realworld-api";
const realWorldApi = new RealworldApi();


const ArticleNew = () => {
    return <ArticleForm
                        title="Create new article"
                        tagsNum={2}
                        type="new"
                        func={(data) => {
                            console.log(data);
                            const {'Title': title, 'Short description': description, 'Text': body, ...tagList} = data;
                            console.log('title', title);
                            console.log('description', description);
                            console.log('body', body);
                            console.log('tagList', Object.values(tagList));
                            realWorldApi.createArticle(title, description, body, Object.values(tagList))
                                .then(result => console.log(result))
                        }}
    />
};

export default ArticleNew;