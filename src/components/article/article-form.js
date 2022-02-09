import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classes from '../form/form.module.scss';
import { articleNew } from '../form/labels';
import { getStandardInput, getErrorMessage } from '../form/input';
import getValidationStyleInput from '../../helpers/getValidationStyleInput';
import * as actions from '../../redux/actions';
import ArticleTags from './article-tags/article-tags';
import { articleNewEditSchema } from '../../helpers/schemaFormValidation';

const ArticleForm = ({ title, type, func, article }) => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(articleNewEditSchema),
    defaultValues: {
      Title: slug ? localStorage.getItem('Title') || article?.title : localStorage.getItem('Title') || '',
      'Short description': slug
        ? localStorage.getItem('Short description') || article?.description
        : localStorage.getItem('Short description') || '',
      Text: slug ? localStorage.getItem('Text') || article?.body : localStorage.getItem('Text') || '',
    },
  });

  const inputs = articleNew.map((el) => getStandardInput(el.label, el.placeholder, errors, register, Controller));

  const [tagsArr, setTagsArr] = useState(
    type === 'new' ? ['tag', ''] : article?.tagList.filter((el) => el.trim() !== '')
  );
  const tags = <ArticleTags tagsArr={tagsArr} setTagsArr={setTagsArr} />;

  const navigateToHomePage = () => {
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
              style={getValidationStyleInput(errors, 'Text')}
              className={classes.inputTextarea}
              placeholder="Text"
              rows="10"
              {...register('Text', {
                onChange: (event) => {
                  localStorage.setItem('Text', event.target.value);
                },
              })}
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

ArticleForm.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  article: PropTypes.instanceOf(Object),
};

ArticleForm.defaultProps = {
  article: {},
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(ArticleForm);
