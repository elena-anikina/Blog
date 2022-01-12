import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import classes from '../form/form.module.scss';
import {useForm} from "react-hook-form";
import {articleDefaultValues, tagsDefaultValues} from "../../helpers/articleDefaultValues";
import {articleNew} from "../form/labels";
import {getErrorMessage, getValidationStyleForInput} from "../form/getRedValidationStyleForInput";
import getSignUpValidationOptions from "../../helpers/getSignUpValidationOptions";
import {getArticleDefaultValues} from "../../helpers/articleDefaultValues";
import {getStandardInput} from "../form/getRedValidationStyleForInput";
import {useParams} from "react-router-dom";
import * as actions from '../../redux/actions';


const getUpdatedArticleDefaultValues = (type, article) => {
    return getArticleDefaultValues(type, article);
};

const ArticleForm = ({title, tagsNum, type, func, article, getArticleForEditing}) => {


    const {register, formState: {errors}, handleSubmit, reset, watch} = useForm({
        mode: "onBlur", defaultValues: {
            "Title": type === 'edit' ? article?.title : '',
            "Short description": type === 'edit' ? article?.description : '',
            "Text": type === 'edit' ? article?.body : '',
            ...tagsDefaultValues(article?.tagList)
        }
    });

    const inputs = articleNew.map(el => getStandardInput(el.label, el.placeholder, errors, register));


    const tagsLength = article?.tagList.length ? article?.tagList.length : 2;
    console.log(tagsLength);
    const tags = Array.from({length: tagsLength}).map((el, i) => {

        return (
            <div key={i} className={classes.tagInputWrapper}>
                <input
                    className={classes.tagsInput}
                    placeholder="Tag"
                    {...register(`tag${i+1}`, {...getSignUpValidationOptions(`tag${i}`)})}
                />
                <div className={classes.tagDelete} onClick={() => console.log('delete')}>Delete</div>
                {
                    (i === tagsLength - 1)  && <div className={classes.tagAdd} onClick={() => console.log('add tag')}>Add tag</div>
                }
            </div>
        )
    })
    return (
        <div className={classes.articleForm}>
            <h1 className={classes.heading}>{title}</h1>
            <form className={classes.form} onSubmit={handleSubmit(func)}>
                {inputs}
                <div className={classes.form}>
                    <label>
                        Text
                        <textarea
                            defaultValue={article?.body}
                            style={getValidationStyleForInput(errors, 'Text')}
                            className={classes.inputTextarea}
                            placeholder="Text"
                            rows="10"
                            {...register('Text', {...getSignUpValidationOptions("Text")})}
                        />
                        {getErrorMessage(errors, 'Text')}
                    </label>
                </div>
                <div className={classes.form}>
                    <label><div>Tags</div>{tags}</label>
                </div>
                <button type="submit" className={classes.btnArticle}>Send</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, actions)(ArticleForm);