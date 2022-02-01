import * as c from './actionTypes';
import { success, error } from '../helpers/resultPopus';
import { realWorldApi } from '../services/realworld-api';
import { token } from '../services/token';

export const getArticlesCount = (articlesCount) => ({ type: c.GET_ARTICLES_COUNT, articlesCount });

export const fetchArticlesSuccess = (articles) => ({
  type: 'FETCH_ARTICLES_SUCCESS',
  articles
});

export const fetchArticlesError = (err) => ({ type: c.FETCH_ARTICLES_ERROR, err });

export const fetchArticles = (limit, offset) => (dispatch) => {
  realWorldApi.getArticles(token.get(), limit, offset).then(
    (result) => {
      if (result.articles) {
        dispatch(fetchArticlesSuccess(result.articles));
        dispatch(getArticlesCount(result.articlesCount));
      }

      if (result.errors) {
        dispatch(fetchArticlesError(result.errors));
      }
    },
    (err) => {
      dispatch(fetchArticlesError(err));
    }
  );
};

export const calcPagination = (event) => {
  const { textContent: page } = event.target;
  return { type: c.CALC_PAGINATION, page };
};

export const setFirstPage = () => ({ type: c.SET_FIRST_PAGE });

export const signUpSuccess = (user) => ({ type: c.SIGNUP_SUCCESS, user });

export const setNoErrors = () => ({ type: c.SET_NO_ERRORS });

export const signUpError = (err) => ({ type: c.SIGNUP_ERROR, err });

export const signUpSubmit = (data, reset, navFunc) => {
  const { Username: username, 'Email address': email, Password: password } = data;
  return (dispatch) => {
    realWorldApi
      .registerUser(username, email, password)
      .then((result) => {
        reset();
        if (result.user) {
          success('signUpSuccess', navFunc);
          dispatch(signUpSuccess(result.user));
          dispatch(setNoErrors());
        }
        if (result.errors) {
          error('signUpError');
          dispatch(signUpError(result.errors));
        }
      })
      .catch(() => {
        reset();
      });
  };
};

export const signInSuccessful = (user) => ({ type: c.SIGN_IN_SUCCESSFUL, user });

export const signInError = (errors) => ({ type: c.SIGN_IN_ERROR, errors });

export const signInSubmit = (data, reset, navigate, fromPage, navFunc) => {
  const { 'Email address': email, Password: password } = data;
  return (dispatch) => {
    realWorldApi
      .loginUser(email, password)
      .then((response) => {
        reset();
        if (response.user) {
          success('signInSuccess', navFunc);
          dispatch(signInSuccessful(response.user));
          dispatch(setFirstPage());
          dispatch(setNoErrors());
        } else {
          error('signInError');
          dispatch(signInError(response.errors));
        }
      })
      .catch(() => {
        reset();
      });
  };
};

export const checkingAuthentication = () => (dispatch) => {
  realWorldApi
    .getCurrentUser()
    .then((response) =>
      response.user ? dispatch(signInSuccessful(response.user)) : dispatch(signInError(response.errors))
    )
    .catch((err) => err);
};

export const logOut = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: c.LOG_OUT });
  dispatch(setFirstPage());
};

export const newArticleSuccess = (article) => ({ type: c.NEW_ARTICLE_SUCCESS, article });

export const newArticleError = (err) => ({ type: c.NEW_ARTICLE_ERROR, err });

export const newArticle = (slug, data, tagsArr, navigateToHomePage, reset) => (dispatch) => {
  const { Title: title, 'Short description': description, Text: body } = data;
  realWorldApi
    .createArticle(title, description, body, tagsArr)
    .then((result) => {
      reset();
      if (result.article) {
        success('newArticleSuccess', navigateToHomePage);
      }
      if (!result.article) {
        error('newArticleError');
      }
    })
    .catch((err) => err);
};

export const editProfileSuccess = (user) => ({ type: c.EDIT_PROFILE_SUCCESS, user });

export const editProfileError = (err) => ({ type: c.EDIT_ARTICLE_ERROR, err });

export const editProfile = (data, navFunc) => {
  const { 'Avatar image (url)': image, 'Email address': email, 'New password': password, Username: username } = data;
  return (dispatch) => {
    realWorldApi
      .updateUser(email, username, password, image)
      .then((response) => {
        if (response.user) {
          success('editProfileSuccess', navFunc);
          localStorage.setItem('token', response.user.token);
          dispatch(editProfileSuccess(response.user));
          dispatch(setNoErrors());
        } else {
          error('editProfileError');
          dispatch(editProfileError(response.errors));
        }
      })
      .catch((err) => err);
  };
};

export const getArticleForEditingSuccess = (article) => ({ type: c.GET_ARTICLE_SUCCESS, article });

export const getArticleForEditingError = (err) => ({ type: c.GET_ARTICLE_ERROR, err });

export const getError = (err) => ({ type: c.GET_ERROR, err });

export const getArticleForEditing = (slug) => (dispatch) => {
  realWorldApi
    .getArticle(slug)
    .then((response) => {
      if (response.article) {
        dispatch(getArticleForEditingSuccess(response.article));
      }
      if (response.errors) {
        dispatch(getArticleForEditingError(response.errors));
        dispatch(getError(response.errors));
      }
    })
    .catch((err) => getError(err));
};

export const editArticleSuccess = (article) => ({ type: c.EDIT_ARTICLE_SUCCESS, article });

export const editArticleError = (err) => ({ type: c.EDIT_ARTICLE_ERROR, err });

export const editArticle = (slug, data, tagsArr, navigateToHomePage) => {
  const { Title: title, 'Short description': description, Text: body } = data;
  return (dispatch) => {
    realWorldApi
      .editArticle(slug, title, description, body, tagsArr)
      .then((response) => {
        if (response.article) {
          success('articleEditSuccess', navigateToHomePage);
          dispatch(editArticleSuccess(response.article));
          dispatch(setNoErrors());
        }
        if (!response.article) {
          dispatch(editArticleError(response.errors));
          error('articleEditError');
        }
      })
      .catch((err) => err);
  };
};

export const deleteArticle = (slug, navigateToHomePage) => (dispatch) => {
  realWorldApi.deleteArticle(slug).then((response) => {
    if (response.ok) {
      success('articleDeleteSuccess', navigateToHomePage);
    }
    if (!response.ok) {
      error('articleDeleteError');
    }
  });
};

export const handleLikeSuccess = (article) => ({ type: c.HANDLE_LIKE_SUCCESS, article });

export const handleLikeError = (err) => ({ type: c.HANDLE_LIKE_ERROR, err });

export function handleLike(slug, favorite) {
  return (dispatch) => {
    if (favorite) {
      realWorldApi
        .unFavoriteArticle(slug)
        .then((response) =>
          response.article ? dispatch(handleLikeSuccess(response.article)) : dispatch(handleLikeError(error))
        )
        .catch((err) => err);
    } else {
      realWorldApi
        .favoriteArticle(slug)
        .then((response) =>
          response.article ? dispatch(handleLikeSuccess(response.article)) : dispatch(handleLikeError(error))
        )
        .catch((err) => err);
    }
  };
}

export const addTag = () => ({ type: c.ADD_TAG });

export const paginationArrowRight = () => ({ type: c.PAGINATION_ARROW_RIGHT });

export const paginationArrowLeft = () => ({ type: c.PAGINATION_ARROW_LEFT });
