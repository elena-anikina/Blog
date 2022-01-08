import React from "react";
import classes from '../form/form.module.scss';
import {articleNew} from "../form/labels";

const ArticleNew = () => {
    const inputs = articleNew.map(el => {
        return (
            <div key={el.label} className={classes.form}>
                <label>{el.label}
                    <input
                        className={classes.input}
                        placeholder={el.placeholder || el.label}
                    />
                </label>
            </div>
        );
    });
    return (
        <div className={classes.articleForm}>
            <h1 className={classes.heading}>Create new article</h1>
            <form className={classes.form} onSubmit={() => console.log('submit articleNew')}>
                {inputs}
                <div className={classes.form}>
                    <label>Text
                        <textarea className={classes.inputTextarea} placeholder="Text" rows="10" />
                    </label>
                </div>
                <div className={classes.form}>
                    <label><div>Tags</div>
                        <div className={classes.tagInputWrapper}>
                    <input className={classes.tagsInput} placeholder="Tag"/>
                    <button className={classes.tagDelete}>Delete</button>
                        </div>
                        <div className={classes.tagInputWrapper}>
                            <input className={classes.tagsInput} placeholder="Tag"/>
                            <button className={classes.tagDelete}>Delete</button>
                            <button className={classes.tagAdd}>Add tag</button>
                        </div>
                    </label>
                </div>
                <button type="submit" className={classes.btnArticle}>Send</button>
            </form>
        </div>
    );
};

export default ArticleNew;