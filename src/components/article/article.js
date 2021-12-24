import React from "react";
import classes from "./article.module.scss";
import avatar from "./avatar.png";
import Text from "./text/text";

const Article = () => {
    return (
        <div className={classes.article}>
            <Text />
            <div className={classes.userContainer}>
                <div className={classes.userNameContainer}>
                    <div className={classes.userName}>John Doe</div>
                    <span className={classes.date}>March 5, 2020 </span>
                </div>
                <img className={classes.avatar} src={avatar} alt="" />
            </div>
        </div>
    );
};

export default Article;