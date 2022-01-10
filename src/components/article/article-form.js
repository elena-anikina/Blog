import React from "react";
import classes from '../form/form.module.scss';
import {useForm} from "react-hook-form";
import {articleDefaultValues} from "../../helpers/articleDefaultValues";
import {articleNew} from "../form/labels";
import {getErrorMessage, getValidationStyleForInput} from "../form/getRedValidationStyleForInput";
import getSignUpValidationOptions from "../../helpers/getSignUpValidationOptions";
import {getArticleDefaultValues} from "../../helpers/articleDefaultValues";
import {getStandardInput} from "../form/getRedValidationStyleForInput";

const ArticleForm = ({title, tagsNum, type, func}) => {
    const {register, formState: {errors}, handleSubmit, reset, watch} = useForm({
        mode: "onBlur", defaultValues: {...getArticleDefaultValues(type)}
    });

    const inputs = articleNew.map(el => getStandardInput(el.label, el.placeholder, errors, register));

    const tags = Array.from({length: tagsNum}).map((el, i) => (
        <div key={i} className={classes.tagInputWrapper}>
            <input
                className={classes.tagsInput}
                placeholder="Tag"
                {...register(`tag${i+1}`, {...getSignUpValidationOptions(`tag${i}`)})}
            />
            <div className={classes.tagDelete} onClick={() => console.log('delete')}>Delete</div>
            {
                i === Array.from({length: tagsNum}).length - 1 && <div className={classes.tagAdd} onClick={() => console.log('add tag')}>Add tag</div>
            }
        </div>
    ))

    return (
        <div className={classes.articleForm}>
            <h1 className={classes.heading}>{title}</h1>
            <form className={classes.form} onSubmit={handleSubmit(func)}>
                {inputs}
                <div className={classes.form}>
                    <label>
                        Text
                        <textarea
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

export default ArticleForm;