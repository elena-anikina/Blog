import React from "react";
import classes from './main.module.scss';
import ArticlesAll from "../articles-all/articles-all";
import Pagination from "../pagination/pagination";

const Main = () => {
    return (
        <div className={classes.main}>
            <ArticlesAll />
            <Pagination />
        </div>
    );
};

export default Main;