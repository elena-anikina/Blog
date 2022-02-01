import { token } from '../../services/token';
import * as c from '../actionTypes';

const initialState = null;

export const user = (state = initialState, action) => {
  switch (action.type) {
    case c.SIGNUP_SUCCESS: {
      token.set(action.user.token);
      return { ...action.user };
    }

    case c.SIGN_IN_SUCCESSFUL:
      token.set(action.user.token);
      return { ...action.user };

    case c.LOG_OUT:
      token.remove();
      return null;

    case c.EDIT_PROFILE_SUCCESS:
      return { ...action.user };

    default:
      return state;
  }
};
