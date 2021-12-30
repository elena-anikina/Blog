import React from "react";
import classes from './article-preview.module.scss';
import TextPreview from "./text-preview/text-preview";
import UserInfo from "./user-info/user-info";

const ArticlePreview = ({preview, ...article}) => {
    return (
        <div className={classes.articlePreview}>
            <TextPreview {...article} preview={preview} />
            <UserInfo {...article} />
        </div>
    );
};

export default ArticlePreview;