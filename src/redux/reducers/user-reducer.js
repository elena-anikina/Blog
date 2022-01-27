import { stateUser } from '../state';
import handleLikes from '../../helpers/handleLikes';

export const userReducer = (state = stateUser, action) => {
  const { articles, errors, articlesCount, pagination } = state;

  switch (action.type) {
    case 'SIGNUP_SUCCESS': {
      localStorage.setItem('token', action.user.token);
      return {
        ...state,
        errorMessages: null,
        user: action.user,
      };
    }

    case 'SIGNUP_ERROR':
      return {
        ...state,
        errorMessages: action.err,
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

    default:
      return state;
  }
};
