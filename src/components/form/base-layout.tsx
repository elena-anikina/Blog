import React from 'react';
import classes from './form.module.scss';
import classNames from 'classnames';

interface IBaseLayoutProps {
    heading: string,
    children: any
}

const BaseLayout: React.FC<IBaseLayoutProps> = ({ heading, children }) => {
    const classNamesBox = classNames(classes.formProfile, { [`${classes.articleForm}`]: heading.includes('article') });
    return (
        <div className={classNamesBox}>
            <h1 className={classes.heading}>{heading}</h1>
            {children}
        </div>
    );
};

export default BaseLayout;
