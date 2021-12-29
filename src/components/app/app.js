import React from 'react';
import Header from '../header/header';
import './app.scss';
import {Routes, Route, Link} from "react-router-dom"
import HomePage from "../pages/home-page";
import Layout from "../layout/layout";
import ArticlePage from "../pages/article-page";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="articles" element={<HomePage />} />
                    <Route path="/articles/:slug" element={<ArticlePage />} />
                    <Route path="*" element={<div>No page found</div>} />
                </Route>
            </Routes>
        </>
    );
};

export default App;