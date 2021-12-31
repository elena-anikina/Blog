import React from "react";
import classes from "./pagination.module.scss";
import arrow1 from './arrow1.svg';
import arrow2 from './arrow2.svg';

const Pagination = ({data, func, details: {page, arrowStart, arrowEnd}}) => {

    const numberOfArticles = data.length;
    const numberOfArticlesPerPage = 5;
    const numberOfPages = Math.ceil(numberOfArticles / numberOfArticlesPerPage);


    const pagination = Array.from({length: numberOfPages}, (v, k) => k+1);

    const paginationRender = pagination.map((el, i) => {
        let paginationClasses = [classes.paginationBtn];
        if (el === page) {
            paginationClasses.push(classes.active)
        }
        return <button
                        key={i}
                        className={paginationClasses.join(' ')}
                        onClick={func} >
                        {el}
               </button>
    });


    const classNamesStart = arrowStart ? `${classes.arrow1} ${classes.activeArrow}` : classes.arrow1;
    const classNamesEnd = arrowEnd ? `${classes.arrow2} ${classes.activeArrow}` : classes.arrow2;

    return (
        <div className={classes.pagination}>
                    <button className={classNamesStart} />
                        {paginationRender}
                    <button className={classNamesEnd} />
        </div>
    );
};

export default Pagination;