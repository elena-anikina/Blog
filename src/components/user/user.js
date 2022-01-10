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


const User = ({author: {username, image}, createdAt, style}) => {
    const location = useLocation();
    console.log(location.pathname);
    const {slug} = useParams();
    const userImage = image ? image : 'https://api.realworld.io/images/smiley-cyrus.jpeg';
    const date = createdAt ? format(new Date(createdAt), 'LLLL d, yyyy') : null;

    const editButtons = location.pathname.includes(slug) ? (
        <div className={classes.editButtons}>
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={() => console.log('Удалить статью')}>
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

export default connect(mapStateToProps)(User);

