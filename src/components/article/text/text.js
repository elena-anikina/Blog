import React from "react";
import classes from "./text.module.scss";
import likeFalse from '../like-false.svg';
import {Link} from "react-router-dom";

const Text = ({title, favoritesCount, tagList, description, slug, id, body, preview}) => {

    console.log(body);

    const tags = tagList.map((tag, i) => tag ? (<span key={i} className={classes.tag}>{tag}</span>) : null);

    const fullText = !preview ? body : null;

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Link className={classes.title} to={`/articles/${slug}`}>{title}</Link>
                <div className={classes.likes}>
                    <img src={likeFalse} alt="" />
                    <span className={classes.likesNumber}>{favoritesCount}</span>
                </div>
            </div>
            <div className={classes.tags}>{tags}</div>
            <div className={classes.text}>{description}</div>
            <div className={classes.fullText}>{fullText}</div>
        </div>

    );
};

export default Text;
