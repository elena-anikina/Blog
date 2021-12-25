import React from 'react';
import Header from '../header/header';
import './app.scss';
import {Routes, Route, Link} from "react-router-dom"
import HomePage from "../pages/home-page";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/articles" element={<HomePage />} />
            </Routes>
        </>
    );
};

export default App;