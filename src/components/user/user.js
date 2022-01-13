import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import classes from "./user.module.scss";
import imageDefault from "./avatar.png";
import { format } from 'date-fns'
import {useLocation, useParams, useNavigate, Link} from "react-router-dom";
import { Modal, Button, Space } from 'antd';
const { confirm } = Modal;
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import * as actions from '../../redux/actions';


const User = ({author: {username, image}, createdAt, style, deleteArticle, user, article}) => {
    const location = useLocation();
    const {slug} = useParams();
    const userImage = image ? image : 'https://api.realworld.io/images/smiley-cyrus.jpeg';
    const date = createdAt ? format(new Date(createdAt), 'LLLL d, yyyy') : null;

    console.log('user', user?.username);
    console.log('author', username)

    const editButtons = location.pathname.includes(slug) && user?.username === username  ? (
        <div className={classes.editButtons}>
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={() => deleteArticle(slug)}>
                <button className={classes.deleteBtn}>Delete</button>
            </Popconfirm>
            <Link to={`/articles/${slug}/edit`} className={classes.userLink}>
            <button className={classes.editBtn}>Edit</button>
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

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, actions)(User);

