import React from "react";
import classes from '../form/form.module.scss';
import {articleNew} from "../form/labels";
import {useForm} from "react-hook-form";
import getSignUpValidationOptions from "../../helpers/getSignUpValidationOptions";
import {articleDefaultValues} from "../../helpers/articleDefaultValues";
import {getValidationStyleForInput} from "../form/getRedValidationStyleForInput";
import {getErrorMessage} from "../form/getRedValidationStyleForInput";


const ArticleNew = () => {

    const {register, formState: {errors}, handleSubmit, reset, watch} = useForm({
        mode: "onBlur", defaultValues: {...articleDefaultValues}
    });

    const inputs = articleNew.map(el => (
        <div key={el.label} className={classes.form}>
            <label>{el.label}
                <input
                    style={getValidationStyleForInput(errors, el.label)}
                    className={classes.input}
                    placeholder={el.placeholder || el.label}
                    {...register(el.label, {...getSignUpValidationOptions(el.label)})}
                />
                {getErrorMessage(errors, el.label)}
            </label>
        </div>
    ));


    const tags = Array.from({length: 2}).map((el, i) => (
        <div key={i} className={classes.tagInputWrapper}>
            <input
                className={classes.tagsInput}
                placeholder="Tag"
                {...register(`tag${i+1}`, {...getSignUpValidationOptions(`tag${i}`)})}
            />
            <button className={classes.tagDelete}>Delete</button>
            {
                i === Array.from({length: 2}).length - 1 && <button className={classes.tagAdd}>Add tag</button>
            }
        </div>
    ))

    return (
        <div className={classes.articleForm}>
            <h1 className={classes.heading}>Create new article</h1>
            <form className={classes.form} onSubmit={handleSubmit((data) => console.log('submit articleNew', data))}>
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

export default ArticleNew;