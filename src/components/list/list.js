import React, {useEffect, useState} from "react";
import classes from "./list.module.scss";
import Article from "../article/article";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";

const List = ({fetchArticles}) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        console.log('Hello from use effect')
        fetchArticles();
    }, [])
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