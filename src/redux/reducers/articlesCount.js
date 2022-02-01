import * as c from '../actionTypes';

const initialState = 0;

export const articlesCount = (state = initialState, action) => {
  switch (action.type) {
    case c.GET_ARTICLES_COUNT:
      return action.articlesCount;

    default:
      return state;
  }
};
