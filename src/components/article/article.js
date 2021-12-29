import React from "react";
import classes from "./article.module.scss";
import avatar from "./avatar.png";
import Text from "./text/text";
import UserInfo from "./user-info/user-info";

const Article = ({preview, ...article}) => {
    return (
        <div className={classes.article}>
            <Text {...article} preview={preview} />
            <UserInfo {...article} />
        </div>
    );
};

export default Article;