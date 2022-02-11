import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classes from '../form/form.module.scss';
import { articleNew } from '../form/labels';
import { getStandardInput } from '../form/input';
import getValidationStyleInput from '../../helpers/getValidationStyleInput';
import ArticleTags from './article-tags/article-tags';
import { articleNewEditSchema } from '../../helpers/schemaFormValidation';
import { ValidationMessage } from '../form/validation-message';
import Button from '../form/button';
import BaseLayout from "../form/base-layout";
import {IArticle} from "../../types/data";
import {getDefaultValues} from "./get-default-values";

interface IArticleFormProps {
  title: string,
  type: string,
  func: (slug, data, tagsArr, navigateToHomePage, reset) => void,
  article?: null | IArticle
}

const ArticleForm: React.FC<IArticleFormProps> = ({ title, type, func, article }) => {

  const navigate = useNavigate();
  const { slug } = useParams();

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(articleNewEditSchema),
    defaultValues: { ...getDefaultValues(slug, article) },
  });

  const inputs = articleNew.map((el) => getStandardInput(el.label, el.placeholder, errors, register));

  const [tagsArr, setTagsArr] = useState(
    type === 'new' ? ['tag', ''] : article?.tagList.filter((el) => el.trim() !== '')
  );

  const tags = <ArticleTags tagsArr={tagsArr} setTagsArr={setTagsArr} />;

  const navigateToHomePage = () => { navigate('/') };

  const onSubmitForm = (data) => { func(slug, data, tagsArr, navigateToHomePage, reset) };

  return (
      <BaseLayout heading={title}>
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
                rows={10}
                {...register('Text', {
                  onChange: (event) => { localStorage.setItem('Text', event.target.value) },
                })}
              />
              <ValidationMessage errors={errors} input="Text" />
            </label>
          </div>
          <div className={classes.form}>
            <label>
              <div>Tags</div>
              {tags}
            </label>
          </div>
          <Button value="Send" />
        </form>
      </BaseLayout>
  );
};

export default ArticleForm;
