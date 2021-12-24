import React from "react";
import classes from "./pagination.module.scss";

const Pagination = () => {

    const numberOfArticles = 40;
    const numberOfArticlesPerPage = 5;
    const currentPage = 1;
    const numberOfPages = Math.ceil(numberOfArticles / numberOfArticlesPerPage);

    const trimStart = (currentPage - 1) * numberOfArticlesPerPage;
    const trimEnd  = trimStart + numberOfArticlesPerPage;

    const pagination = [];

    return (
        <div className={classes.pagination}>
                    <button className={classes.arrow}>{'<'}</button>
                    <button className={classes.paginationBtn}>1</button>
                    <button className={classes.paginationBtn}>2</button>
                    <button className={classes.paginationBtn}>3</button>
                    <button className={classes.arrow}>{'>'}</button>
        </div>
    );
};

export default Pagination;