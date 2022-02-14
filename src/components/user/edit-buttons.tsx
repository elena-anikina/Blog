import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import classes from './user.module.scss';
import deleteLocalStorageArticleValues from '../../helpers/deleteLocalStorageArticleValues';
import * as actions from '../../redux/actions';

const EditButtons = ({ slug, deleteArticle, navFunc }) => (
  <div className={classes.editButtons}>
    <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={() => deleteArticle(slug, navFunc)}>
      <button className={classes.deleteBtn} type="button">
        Delete
      </button>
    </Popconfirm>
    <Link to={`/articles/${slug}/edit`} className={classes.userLink}>
      <button className={classes.editBtn} type="button" onClick={deleteLocalStorageArticleValues}>
        Edit
      </button>
    </Link>
  </div>
);

EditButtons.propTypes = {
  navFunc: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
};

export default connect(null, actions)(EditButtons);
