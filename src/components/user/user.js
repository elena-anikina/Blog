import React from "react";
import classes from "./user.module.scss";
import imageDefault from "./avatar.png";
import { format } from 'date-fns'


const User = ({author: {username, image}, createdAt, style}) => {
    const userImage = image ? image : 'https://api.realworld.io/images/smiley-cyrus.jpeg';
    const date = createdAt ? format(new Date(createdAt), 'LLLL d, yyyy') : null;
    return (
        <div className={classes.userContainer}>
            <div className={classes.userNameContainer}>
                <div className={classes.userName}>
                    {username}
                    <div className={classes.date}>{date}</div>
                </div>
            </div>
            <img className={classes.avatar} src={userImage} alt="" />
        </div>
    );
};

export default User;