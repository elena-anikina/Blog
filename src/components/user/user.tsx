import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import * as actions from '../../redux/actions';
import classes from './user.module.scss';
import EditButtons from './edit-buttons';

const User: any = ({ author: { username, image }, createdAt, deleteArticle, user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const navFunc = () => navigate('/');
  const { slug } = useParams();
  const userImage = image || 'https://api.realworld.io/images/smiley-cyrus.jpeg';
  const date = createdAt && format(new Date(createdAt), 'LLLL d, yyyy');
  const isAuthor = () => location.pathname.includes(slug) && user?.username === username;

  const editButtons = isAuthor() && <EditButtons slug={slug} deleteArticle={deleteArticle} navFunc={navFunc} />;

  return (
    username && (
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
    )
  );
};

const mapStateToProps = (state) => state;

User.propTypes = {
  deleteArticle: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object),
  createdAt: PropTypes.string.isRequired,
  author: PropTypes.shape({
    image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

User.defaultProps = {
  user: {},
  author: {},
};

export default connect(mapStateToProps, actions)(User);
