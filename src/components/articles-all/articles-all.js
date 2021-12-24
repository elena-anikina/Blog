import React from "react";
import classes from "./articles-all.module.scss";
import Article from "../article/article";

const ArticlesAll = () => {
    return (
        <section className={classes.articlesAll}>
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
        </section>
    );
};

export default ArticlesAll;