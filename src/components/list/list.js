import React, {useEffect, useState} from "react";
import classes from "./list.module.scss";
import Article from "../article/article";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import Pagination from "../pagination/pagination";

const List = ({fetchArticles, articles: data, page, trimStart, trimEnd, calcPagination, arrowStart, arrowEnd}) => {

    useEffect(() => { fetchArticles() }, [])

    const articles = data.map((article) => (<Article key={article.id} {...article} preview />));
    const articles5 = articles.slice(trimStart, trimEnd);
    const pagination = data.length > 5 ? <Pagination
                                                    data={data}
                                                    page={page}
                                                    func={calcPagination}
                                                    arrowStart={arrowStart}
                                                    arrowEnd={arrowEnd} /> : null;

    return (
        <section className={classes.articlesAll}>
            {articles5}
            {pagination}
        </section>
    );
};

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, actions)(List);