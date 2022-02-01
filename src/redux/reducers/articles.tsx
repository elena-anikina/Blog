import handleLikes from '../../helpers/handleLikes';
import * as c from '../actionTypes';

const initialState = [];

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case c.FETCH_ARTICLES_SUCCESS: {
      return [...action.articles];
    }

    case c.HANDLE_LIKE_SUCCESS:
      return [...handleLikes([...state], action.article)];

    case c.HANDLE_LIKE_ERROR:
      return [...state];

    default:
      return state;
  }
};
