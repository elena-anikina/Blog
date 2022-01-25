import React, { useState } from 'react';
import classes from '../../form/form.module.scss';

const ArticleTags = ({ tagsArr, setTagsArr }) => {
  return tagsArr.map((el, i) => (
    <div key={i} className={classes.tagInputWrapper}>
      <input
        className={classes.tagsInput}
        placeholder="Tag"
        value={el}
        onChange={(e) =>
          setTagsArr((arr) => {
            const newTagsArr = [...arr].map((elem, index) => {
              if (i === index) {
                return e.target.value;
              }
              return elem;
            });
            return newTagsArr;
          })
        }
      />
      <div
        className={classes.tagDelete}
        onClick={() => {
          setTagsArr((arr) => {
            let newTagsArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
            if (newTagsArr.length === arr.length) {
              newTagsArr.pop();
            }
            return arr.length === 1 ? arr : newTagsArr;
          });
        }}
      >
        Delete
      </div>
      {i === tagsArr.length - 1 && (
        <div
          className={classes.tagAdd}
          onClick={() => {
            setTagsArr((arr) => {
              return [...arr].concat('');
            });
          }}
        >
          Add tag
        </div>
      )}
    </div>
  ));
};

export default ArticleTags;
