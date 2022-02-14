import React from 'react';
import classes from '../../form/form.module.scss';

interface IArticleTagsProps {
    tagsArr: string[],
    setTagsArr: (arr) => string[]
}

const ArticleTags: React.FC<IArticleTagsProps> = ({tagsArr, setTagsArr}) => {

    const handleInputChange = (e, i) => setTagsArr((arr) => [...arr].map((el, idx) => i === idx ? e.target.value : el));
    const addTag = () => setTagsArr((arr) => [...arr].concat(''));
    const deleteTag = (i) => setTagsArr((arr) => arr.length === 1 ? arr : [...arr.slice(0, i), ...arr.slice(i + 1)]);

    return (
        <>
            {
                [...tagsArr].map((el, i) => (
                    <div key={i} className={classes.tagInputWrapper}>
                        <input
                            className={classes.tagsInput}
                            placeholder="Tag"
                            value={el}
                            onChange={(e) => handleInputChange(e, i)}
                        />
                        <div className={classes.tagDelete} onClick={() => deleteTag(i)}>Delete</div>
                        {i === tagsArr.length - 1 && (<div className={classes.tagAdd} onClick={addTag}>Add tag</div>)}
                    </div>
                ))
            }
        </>
    );
};

export default ArticleTags;
