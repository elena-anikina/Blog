import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import PropTypes from 'prop-types';
import classes from './user.module.scss';
import imageDefault from './avatar.png';
import { format } from 'date-fns';
import { useLocation, useParams, useNavigate, Link } from 'react-router-dom';
import { Modal, Button, Popconfirm } from 'antd';

const User = ({ author: { username, image }, createdAt, deleteArticle, user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const userImage = image || 'https://api.realworld.io/images/smiley-cyrus.jpeg';
  const date = createdAt ? format(new Date(createdAt), 'LLLL d, yyyy') : null;

  const navFunc = () => {
    navigate('/');
  };

  const editButtons =
    location.pathname.includes(slug) && user?.username === username ? (
      <div className={classes.editButtons}>
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={() => deleteArticle(slug, navFunc)}>
          <button className={classes.deleteBtn} type="button">
            Delete
          </button>
        </Popconfirm>
        <Link to={`/articles/${slug}/edit`} className={classes.userLink}>
          <button className={classes.editBtn} type="button">
            Edit
          </button>
        </Link>
      </div>
    ) : null;

  return username ? (
    <div className={classes.userContainer}>
      <div className={classes.userNameContainer}>
        <div className={classes.userName}>
          {username}
          <div className={classes.date}>{date}</div>
        </div>
      </div>
      <img className={classes.avatar} src={userImage} alt="" />
      {editButtons}
    </div>
  ) : null;
};

const mapStateToProps = (state) => state;

User.propTypes = {
  deleteArticle: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  createdAt: PropTypes.string.isRequired,
  author: PropTypes.shape({
    image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps, actions)(User);
