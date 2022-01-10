import React from "react";
import classes from '../form/form.module.scss';
import ArticleForm from "../article/article-form";

const ArticleEdit = () => {
    return <ArticleForm
                        title="Edit article"
                        tagsNum={3}
                        type="edit"
                        func={(data) => console.log(data)} />
};

export default ArticleEdit;