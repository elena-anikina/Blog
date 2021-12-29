import React from "react";
import Article from "../article/article";
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";

const ArticlePage = ({articles}) => {
   const {slug} = useParams();
   const [article] = [...articles].filter((el) => el.slug === slug);
   return (<Article {...article} preview={false} />);
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(ArticlePage);