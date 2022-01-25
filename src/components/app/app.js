import React from 'react';
import './app.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home-page';
import Layout from '../layout/layout';
import ArticlePage from '../pages/article-page';
import SignInPage from '../pages/sign-in-page';
import SignUpPage from '../pages/sign-up-page';
import EditProfile from '../pages/edit-profile';
import ArticleNew from '../pages/article-new';
import RequireAuth from '../../hoc/require-authentication';
import ArticleEdit from '../pages/article-edit';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="articles" element={<HomePage />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route
        path="/edit-profile"
        element={
          <RequireAuth>
            <EditProfile />
          </RequireAuth>
        }
      />
      <Route
        path="/article-new"
        element={
          <RequireAuth>
            <ArticleNew />
          </RequireAuth>
        }
      />
      <Route
        path="/articles/:slug/edit"
        element={
          <RequireAuth>
            <ArticleEdit />
          </RequireAuth>
        }
      />
    </Route>
  </Routes>
);

export default App;
