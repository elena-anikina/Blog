import * as c from '../actionTypes';

const initialState = { page: 1, trimStart: 0, trimEnd: 5, arrowStart: false, arrowEnd: true };

export const pagination = (state = initialState, action) => {
  const { trimStart, trimEnd, page } = state;

  switch (action.type) {
    case c.CALC_PAGINATION:
      return {
        ...state,
        page: Number(action.page),
      };

    case c.SET_FIRST_PAGE:
      return {
        ...state,
        page: 1,
        trimStart: 0,
        trimEnd: 5,
        arrowStart: false,
        arrowEnd: true,
      };

    case c.PAGINATION_ARROW_RIGHT: {
      return {
        ...state,
        page: page + 1,
        trimStart: page % 5 === 0 ? trimStart + 5 : trimStart,
        trimEnd: trimEnd + 5,
        arrowStart: !(Number(page) === 1),
        arrowEnd: true,
      };
    }

    case c.PAGINATION_ARROW_LEFT: {
      return {
        ...state,
        page: page - 1,
        trimStart: (page - 1) % 5 === 0 ? trimStart - 5 : trimStart,
        trimEnd: trimEnd - 5,
      };
    }

    default:
      return state;
  }
};
