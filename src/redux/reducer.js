import initialState from './state';
import handleLikes from '../helpers/handleLikes';
import * as c from './actionTypes';

const reducer = (state = initialState, action) => {
  const { articles, errors, articlesCount, pagination } = state;

  switch (action.type) {
    case c.FETCH_ARTICLES_SUCCESS: {
      return {
        ...state,
        articles: action.articles,
        articlesCount: action.articlesCount,
      };
    }

    case c.FETCH_ARTICLES_ERROR:
      return {
        ...state,
        errors: errors + 1,
      };

    case c.CALC_PAGINATION:
      return {
        ...state,
        pagination: {
          ...pagination,
          page: Number(action.page),
        },
      };

    case c.SIGNUP_SUCCESS: {
      localStorage.setItem('token', action.user.token);
      return {
        ...state,
        errorMessages: null,
        user: action.user,
      };
    }

    case c.SIGNUP_ERROR:
      return {
        ...state,
        errorMessages: action.err,
      };

    case c.SIGN_IN_SUCCESSFUL:
      localStorage.setItem('token', action.user.token);
      return {
        ...state,
        user: action.user,
        pagination: {
          ...pagination,
          page: 1,
        },
        errorMessages: null,
      };

    case c.SIGN_IN_ERROR:
      return {
        ...state,
        errorMessages: action.errors,
      };

    case c.LOG_OUT:
      localStorage.removeItem('token');
      return {
        ...state,
        pagination: {
          ...pagination,
          page: 1,
        },
        user: null,
      };

    case c.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.user,
        errorMessages: null,
      };

    case c.EDIT_PROFILE_ERROR:
      return {
        ...state,
        errorMessages: action.err,
      };

    case c.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
      };

    case c.GET_ARTICLE_ERROR:
      return {
        ...state,
        article: null,
        errorMessages: action.err,
      };

    case c.EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
        errorMessages: null,
      };

    case c.EDIT_ARTICLE_ERROR:
      return {
        ...state,
        errorMessages: action.error,
      };

    case c.HANDLE_LIKE_SUCCESS:
      return {
        ...state,
        articles: handleLikes([...articles], action.article),
      };

    case c.HANDLE_LIKE_ERROR:
      return {
        ...state,
      };

    case c.PAGINATION_ARROW_RIGHT: {
      const { trimStart, trimEnd, page } = pagination;
      const numberOfPages = Math.ceil(articlesCount / 5);
      const calcPageNumber = (num) => (page + num <= numberOfPages ? page + num : calcPageNumber(num - 1));
      return {
        ...state,
        pagination: {
          ...pagination,
          page: calcPageNumber(5),
          trimStart: trimStart + 5,
          trimEnd: trimEnd + 5,
          arrowStart: !(Number(page) === 1),
          arrowEnd: page < numberOfPages,
        },
      };
    }

    case c.PAGINATION_ARROW_LEFT: {
      const { trimStart, trimEnd, page } = pagination;
      return {
        ...state,
        pagination: {
          ...pagination,
          page: page - 5,
          trimStart: trimStart - 5,
          trimEnd: trimEnd - 5,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
