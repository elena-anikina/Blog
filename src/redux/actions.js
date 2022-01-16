import RealworldApi from '../services/realworld-api';
import { re } from '../helpers/regex-email';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
const realWorldApi = new RealworldApi();
import { Modal, Space } from 'antd';
import { success, error } from '../helpers/resultPopus';

export const fetchArticlesSuccess = (articles) => ({ type: 'FETCH_ARTICLES_SUCCESS', articles });

export const fetchArticlesError = () => ({ type: 'FETCH_ARTICLES_ERROR' });

export const fetchArticles = () => (dispatch) => {
  realWorldApi.getArticles().then(
    (result) => {
      console.log(result);
      dispatch(fetchArticlesSuccess(result.articles));
    },
    () => {
      dispatch(fetchArticlesError());
    }
  );
};

export const calcPagination = (e) => {
  const { textContent: page } = e.target;
  return { type: 'CALC_PAGINATION', page };
};

export const inputChangeSignUp = (e) => {
  const { value, name } = e.target;
  console.log(e);
  console.log(name);
  console.log(value);
  return { type: 'INPUT_CHANGE_SIGNUP', value, name };
};

export const signUpSuccess = (user) => ({ type: 'SIGNUP_SUCCESS', user });

export const signUpError = (error) => ({ type: 'SIGNUP_ERROR', error });

export const signUpSubmit = (data, reset) => {
  console.log(data);
  const { Username: username, 'Email address': email, Password: password } = data;
  console.log(username, email, password);
  return (dispatch) => {
    realWorldApi
      .registerUser(username, email, password)
      .then((result) => {
        reset();
        if (result.user) {
          dispatch(signUpSuccess(result.user));
        }
        if (result.errors) {
          dispatch(signUpError(result.errors));
        }
      })
      .catch((err) => {
        reset();
        console.log(err);
      });
  };
};

export const signInSuccessful = (user) => ({ type: 'SIGN_IN_SUCCESSFUL', user });

export const signInError = (errors) => ({ type: 'SIGN_IN_ERROR', errors });

export const signInSubmit = (data, reset, navigate, fromPage, navFunc) => {
  const { 'Email address': email, Password: password } = data;
  console.log(email, password);
  return (dispatch) => {
    return realWorldApi
      .loginUser(email, password)
      .then((response) => {
        console.log(response);
        reset();
        if (response.user) {
          success('signInSuccess', navFunc);
          dispatch(signInSuccessful(response.user));
        } else {
          error('signInError');
          dispatch(signInError(response.errors));
        }
      })
      .catch((err) => {
        console.log(err);
        reset();
      });
  };
};

export const checkingAuthentication = () => {
  console.log('inside checkingAuthentication');
  // const location = useLocation();
  // const fromPage = location.state?.from?.pathname || '/';
  //
  // console.log(location);
  // console.log(fromPage);

  return (dispatch) => {
    return realWorldApi
      .getCurrentUser()
      .then((response) =>
        response.user ? dispatch(signInSuccessful(response.user)) : dispatch(signInError(response.errors))
      )
      .catch((err) => console.log(err));
  };
};

export const logOut = () => {
  localStorage.removeItem('token');
  return { type: 'LOG_OUT' };
};

export const newArticleSuccess = (article) => ({ type: 'NEW_ARTICLE_SUCCESS', article });

export const newArticleError = (error) => ({ type: 'NEW_ARTICLE_ERROR', error });

export const newArticle = (slug, data, tagsArr, navigateToHomePage) => {
  console.log(data);
  const { Title: title, 'Short description': description, Text: body, ...tagList } = data;
  return (dispatch) => {
    return realWorldApi
      .createArticle(title, description, body, tagsArr)
      .then((result) => {
        if (result.article) {
          success('newArticleSuccess', navigateToHomePage);
        }
        if (!result.article) {
          error('newArticleError');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editProfileSuccess = (user) => ({ type: 'EDIT_PROFILE_SUCCESS', user });

export const editProfileError = (error) => ({ type: 'EDIT_PROFILE_ERROR', error });

export const editProfile = (data) => {
  console.log(data);
  const { 'Avatar image (url)': image, 'Email address': email, 'New password': password, Username: username } = data;

  console.log(image, email, password, username);
  return (dispatch) => {
    realWorldApi
      .updateUser(email, username, password, image)
      .then((response) => {
        if (response.user) {
          success('editProfileSuccess');
          console.log(response.user);
          localStorage.setItem('token', response.user.token);
          dispatch(editProfileSuccess(response.user));
        } else {
          error('editProfileError');
          console.log(response);
          dispatch(editProfileError(response.errors));
        }
      })
      .catch((err) => console.log(err));
  };
};

export const getArticleForEditingSuccess = (article) => ({ type: 'GET_ARTICLE_SUCCESS', article });

export const getArticleForEditingError = (error) => ({ type: 'GET_ARTICLE_ERROR', error });

export const getArticleForEditing = (slug) => {
  return (dispatch) => {
    return realWorldApi
      .getArticle(slug)
      .then((response) => {
        console.log(response);
        return response.article
          ? dispatch(getArticleForEditingSuccess(response.article))
          : dispatch(getArticleForEditingError(response.errors));
      })
      .catch((err) => console.log(err));
  };
};

export const editArticleSuccess = (article) => ({ type: 'EDIT_ARTICLE_SUCCESS', article });

export const editArticleError = (error) => ({ type: 'EDIT_ARTICLE_ERROR', error });

export const editArticle = (slug, data, tagsArr, navigateToHomePage) => {
  console.log(slug);
  const { Title: title, 'Short description': description, Text: body, ...tagList } = data;
  return (dispatch) => {
    return realWorldApi
      .editArticle(slug, title, description, body, tagsArr)
      .then((response) => {
        if (response.article) {
          dispatch(editArticleSuccess(response.article));
          success('articleEditSuccess', navigateToHomePage);
        }
        if (!response.article) {
          dispatch(editArticleError(response.errors));
          error('articleEditError');
        }
      })
      .catch((err) => console.log(err));
  };
};

export const deleteArticle = (slug) => {
  return (dispatch) => {
    return realWorldApi.deleteArticle(slug).then((response) => {
      console.log(response);
    });
  };
};

export const handleLikeSuccess = (article) => ({ type: 'HANDLE_LIKE_SUCCESS', article });

export const handleLikeError = (error) => ({ type: 'HANDLE_LIKE_ERROR', error });

export const handleLike = (slug, favorite) => {
  return (dispatch) => {
    if (favorite) {
      realWorldApi
        .unFavoriteArticle(slug)
        .then((response) => {
          console.log(response);
          return response.article ? dispatch(handleLikeSuccess(response.article)) : dispatch(handleLikeError(error));
        })
        .catch((err) => console.log(err));
    } else {
      realWorldApi
        .favoriteArticle(slug)
        .then((response) => {
          console.log(response);
          return response.article ? dispatch(handleLikeSuccess(response.article)) : dispatch(handleLikeError(error));
        })
        .catch((err) => console.log(err));
    }
  };
};

export const addTag = () => ({ type: 'ADD_TAG' });
