import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import classes from '../form/form.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { articleNew } from '../form/labels';
import { getErrorMessage, getValidationStyleForInput } from '../form/getRedValidationStyleForInput';
import getSignUpValidationOptions from '../../helpers/getSignUpValidationOptions';
import { getStandardInput } from '../form/getRedValidationStyleForInput';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as actions from '../../redux/actions';

const ArticleForm = ({
  title,
  checkingAuthentication,
  fetchArticles,
  type,
  func,
  article,
  getArticleForEditing,
  tags: tagsData,
  handleTagsFunc,
  addTagFunc,
}) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  console.log(slug);

  const {
    getValues,
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    control,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      Title: slug ? localStorage.getItem('Title') || article?.title : localStorage.getItem('Title') || '',
      'Short description': slug
        ? localStorage.getItem('Short description') || article?.description
        : localStorage.getItem('Short description') || '',
      Text: slug ? localStorage.getItem('Text') || article?.body : localStorage.getItem('Text') || '',
    },
  });

  const [tagsArr, setTagsArr] = useState(
    type === 'new' ? ['tag', ''] : article?.tagList.filter((el) => el.trim() !== '')
  );
  const [tagsValue, setTagsValue] = useState();

  const inputs = articleNew.map((el) => getStandardInput(el.label, el.placeholder, errors, register, Controller));

  let tagsLength = 5; //article?.tagList.length ? article?.tagList.length : 2;

  let tags = tagsArr.map((el, i, arr) => {
    console.log(i);
    console.log(tagsArr);
    return (
      <div key={i} className={classes.tagInputWrapper}>
        <input
          className={classes.tagsInput}
          placeholder="Tag"
          // defaultValue={type === 'edit' ? article?.tagList[i] : ''}
          value={el}
          onChange={(e) =>
            setTagsArr((arr) => {
              const newTagsArr = [...arr].map((elem, index, array) => {
                if (i === index) {
                  return e.target.value;
                }
                return elem;
              });
              return newTagsArr;
            })
          }

          /*{...register(`tag${i+1}`, {...getSignUpValidationOptions(`tag${i}`)})}*/
        />
        <div
          className={classes.tagDelete}
          onClick={() => {
            console.log('delete');
            console.log(tagsArr);
            setTagsArr((arr) => {
              let newTagsArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
              if (newTagsArr.length === arr.length) {
                newTagsArr.pop();
              }
              console.log(newTagsArr);
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
              console.log('add');
              // addTagFunc();
              setTagsArr((arr) => {
                return [...arr].concat('');
              });
            }}
          >
            Add tag
          </div>
        )}
      </div>
    );
  });

  const navigateToHomePage = () => {
    console.log('inside navFunc');
    navigate('/');
  };

  const onSubmitForm = (data) => {
    func(slug, data, tagsArr, navigateToHomePage, reset);
  };

  return (
    <div className={classes.articleForm}>
      <h1 className={classes.heading}>{title}</h1>
      <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)}>
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
              {...register('Text', { ...getSignUpValidationOptions('Text') })}
            />
            {getErrorMessage(errors, 'Text')}
          </label>
        </div>
        <div className={classes.form}>
          <label>
            <div>Tags</div>
            {tags}
          </label>
        </div>
        <button type="submit" className={classes.btnArticle}>
          Send
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(ArticleForm);
