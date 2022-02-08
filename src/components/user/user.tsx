import React from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import * as actions from '../../redux/actions';
import classes from './user.module.scss';
import EditButtons from './edit-buttons';
import { IUser } from '../../types/data';

interface IUserProps {
  author: IUser;
  createdAt: string;
  deleteArticle: any;
  user: IUser | null;
}

const User: React.FC<IUserProps> = ({ author: { username, image }, createdAt, deleteArticle, user }) => {
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

export default connect(mapStateToProps, actions)(User);
