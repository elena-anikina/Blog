import * as c from '../actionTypes';

const initialState = null;

export const errorMessages = (state = initialState, action) => {
  switch (action.type) {
    case c.FETCH_ARTICLES_ERROR:
      return { ...action.err };

    case c.SET_NO_ERRORS:
      return null;

    case c.SIGNUP_ERROR:
      return { ...action.err };

    case c.SIGN_IN_ERROR:
      return { ...action.errors };

    case c.EDIT_PROFILE_ERROR:
      return { ...action.err };

    case c.GET_ERROR:
      return { ...action.err };

    case c.EDIT_ARTICLE_ERROR:
      return { ...action.error };

    default:
      return state;
  }
};
