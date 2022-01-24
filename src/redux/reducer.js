import { v4 as uuid } from 'uuid';
import initialState from './state';

const reducer = (state = initialState, action) => {
  const { articles, errors, articlesCount, pagination } = state;

  switch (action.type) {
    case 'FETCH_ARTICLES_SUCCESS': {
      const articlesWithId1 = action.articles.map((el) => ({ id: uuid(), ...el }));
      return {
        ...state,
        articles: [...articlesWithId1],
        articlesCount: action.articlesCount,
        tagsNew: ['tag', null],
      };
    }

    case 'FETCH_ARTICLES_ERROR':
      return {
        ...state,
        errors: errors + 1,
      };

    case 'CALC_PAGINATION': {
      const numberOfArticlesPerPage = 5;
      // const trimStart = (action.page - 1) * numberOfArticlesPerPage;
      // const trimEnd = trimStart + numberOfArticlesPerPage;
      const numberOfPages = Math.ceil(articlesCount / numberOfArticlesPerPage);
      return {
        ...state,
        pagination: {
          ...pagination,
          page: Number(action.page),
          arrowStart: !(Number(action.page) === 1),
          arrowEnd: Number(action.page) < numberOfPages,
        },
      };
    }

    case 'SIGNUP_SUCCESS': {
      localStorage.setItem('token', action.user.token);
      return {
        ...state,
        errorMessages: null,
        user: action.user,
        loadingUser: false,
      };
    }

    case 'SIGNUP_ERROR':
      return {
        ...state,
        errorMessages: action.err,
        loadingUser: false,
      };

    case 'SIGN_IN_SUCCESSFUL':
      localStorage.setItem('token', action.user.token);
      return {
        ...state,
        user: action.user,
        pagination: {
          ...pagination,
          page: 1,
        },
        errorMessages: null,
        loadingUser: false,
      };

    case 'SIGN_IN_ERROR':
      return {
        ...state,
        errorMessages: action.errors,
        loadingUser: false,
      };

    case 'LOG_OUT':
      return {
        ...state,
        pagination: {
          ...pagination,
          page: 1,
        },
        user: null,
        loadingUser: false,
      };

    case 'EDIT_PROFILE_SUCCESS':
      return {
        ...state,
        user: action.user,
        errorMessages: null,
        loadingUser: false,
        resultMessage: true,
      };

    case 'EDIT_PROFILE_ERROR':
      return {
        ...state,
        errorMessages: action.err,
        loadingUser: false,
        resultMessage: true,
      };

    case 'GET_ARTICLE_SUCCESS':
      return {
        ...state,
        article: action.article,
      };

    case 'GET_ARTICLE_ERROR':
      return {
        ...state,
        article: null,
        errorMessages: action.err,
      };

    case 'EDIT_ARTICLE_SUCCESS':
      return {
        ...state,
        article: action.article,
        errorMessages: null,
      };

    case 'EDIT_ARTICLE_ERROR':
      return {
        ...state,
        errorMessages: action.error,
      };

    case 'HANDLE_LIKE_SUCCESS': {
      const idx = [...articles].findIndex((el) => el.slug === action.article.slug);
      const newArticles = [...articles.slice(0, idx), action.article, ...articles.slice(idx + 1)];
      return {
        ...state,
        articles: newArticles,
      };
    }

    case 'HANDLE_LIKE_ERROR':
      return {
        ...state,
      };

    case 'PAGINATION_ARROW_RIGHT': {
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

    case 'PAGINATION_ARROW_LEFT': {
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
