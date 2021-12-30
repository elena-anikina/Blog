import React from "react";
import classes from "../../article.module.scss";
import imageDefault from "../avatar.png";
import { format } from 'date-fns'


const UserInfo = ({author: {username, image}, createdAt  }) => {
    const userImage = (image && image !== 'null') ? image : imageDefault;
    const date = format(new Date(createdAt), 'LLLL d, yyyy');
    return (
        <div className={classes.userContainer}>
            <div className={classes.userNameContainer}>
                <div className={classes.userName}>{username}</div>
                <span className={classes.date}>{date}</span>
            </div>
            <img className={classes.avatar} src={userImage} alt="" />
        </div>
    );
};

export default UserInfo;