import * as c from '../actionTypes';

const initialState = null;

export const article = (state = initialState, action) => {
  switch (action.type) {
    case c.GET_ARTICLE_SUCCESS:
      return { ...action.article };

    case c.GET_ARTICLE_ERROR:
      return null;

    case c.EDIT_ARTICLE_SUCCESS:
      return { ...action.article };

    default:
      return state;
  }
};
