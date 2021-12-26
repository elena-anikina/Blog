import React, {useEffect, useState} from "react";
import classes from "./list.module.scss";
import Article from "../article/article";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";

const List = ({fetchArticles, articles: data}) => {
    useEffect(() => {
        fetchArticles();
    }, [])

    console.log(data);

    const articles = data.map((article) => {
        return (
            <Article {...article} />
        );
    });
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

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, actions)(List);