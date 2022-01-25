import { success, error } from '../helpers/resultPopus';
import RealworldApi from '../services/realworld-api';

const realWorldApi = new RealworldApi();

export const fetchArticlesSuccess = (articles, articlesCount) => ({
  type: 'FETCH_ARTICLES_SUCCESS',
  articles,
  articlesCount,
});

export const fetchArticlesError = () => ({ type: 'FETCH_ARTICLES_ERROR' });

export const fetchArticles = (limit, offset) => (dispatch) => {
  const token = localStorage.getItem('token');
  realWorldApi.getArticles(token, limit, offset).then(
    (result) => {
      dispatch(fetchArticlesSuccess(result.articles, result.articlesCount));
    },
    () => {
      dispatch(fetchArticlesError());
    }
  );
};

export const calcPagination = (event) => {
  const { textContent: page } = event.target;
  return { type: 'CALC_PAGINATION', page };
};

export const inputChangeSignUp = (event) => {
  const { value, name } = event.target;
  return { type: 'INPUT_CHANGE_SIGNUP', value, name };
};

export const signUpSuccess = (user) => ({ type: 'SIGNUP_SUCCESS', user });

export const signUpError = (err) => ({ type: 'SIGNUP_ERROR', err });

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

export const signInSuccessful = (user) => ({ type: 'SIGN_IN_SUCCESSFUL', user });

export const signInError = (errors) => ({ type: 'SIGN_IN_ERROR', errors });

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

export const logOut = () => {
  localStorage.removeItem('token');
  return { type: 'LOG_OUT' };
};

export const newArticleSuccess = (article) => ({ type: 'NEW_ARTICLE_SUCCESS', article });

export const newArticleError = (err) => ({ type: 'NEW_ARTICLE_ERROR', err });

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

export const editProfileSuccess = (user) => ({ type: 'EDIT_PROFILE_SUCCESS', user });

export const editProfileError = (err) => ({ type: 'EDIT_PROFILE_ERROR', err });

export const editProfile = (data) => {
  const { 'Avatar image (url)': image, 'Email address': email, 'New password': password, Username: username } = data;
  return (dispatch) => {
    realWorldApi
      .updateUser(email, username, password, image)
      .then((response) => {
        if (response.user) {
          success('editProfileSuccess');
          localStorage.setItem('token', response.user.token);
          dispatch(editProfileSuccess(response.user));
        } else {
          error('editProfileError');
          dispatch(editProfileError(response.errors));
        }
      })
      .catch((err) => err);
  };
};

export const getArticleForEditingSuccess = (article) => ({ type: 'GET_ARTICLE_SUCCESS', article });

export const getArticleForEditingError = (err) => ({ type: 'GET_ARTICLE_ERROR', err });

export const getArticleForEditing = (slug) => (dispatch) => {
  realWorldApi
    .getArticle(slug)
    .then((response) =>
      response.article
        ? dispatch(getArticleForEditingSuccess(response.article))
        : dispatch(getArticleForEditingError(response.errors))
    )
    .catch((err) => err);
};

export const editArticleSuccess = (article) => ({ type: 'EDIT_ARTICLE_SUCCESS', article });

export const editArticleError = (err) => ({ type: 'EDIT_ARTICLE_ERROR', err });

export const editArticle = (slug, data, tagsArr, navigateToHomePage) => {
  const { Title: title, 'Short description': description, Text: body } = data;
  return (dispatch) => {
    realWorldApi
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
      .catch((err) => err);
  };
};

export const deleteArticle = (slug, navigateToHomePage) => {
  realWorldApi.deleteArticle(slug).then((response) => {
    if (response.ok) {
      success('articleDeleteSuccess', navigateToHomePage);
    }
    if (!response.ok) {
      error('articleDeleteError');
    }
  });
};

export const handleLikeSuccess = (article) => ({ type: 'HANDLE_LIKE_SUCCESS', article });

export const handleLikeError = (err) => ({ type: 'HANDLE_LIKE_ERROR', err });

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

export const addTag = () => ({ type: 'ADD_TAG' });

export const paginationArrowRight = () => ({ type: 'PAGINATION_ARROW_RIGHT' });

export const paginationArrowLeft = () => ({ type: 'PAGINATION_ARROW_LEFT' });
