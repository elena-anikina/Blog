import React from 'react';
import classes from './error.module.scss';
import { Alert } from 'antd';


const Error = () => {
    return (
        <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
        />
    );
};

export default Error;