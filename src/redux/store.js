import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import composeEnhancers from '../helpers/compose-enhancers';
import { article } from './reducers/article';
import { articles } from './reducers/articles';
import { articlesCount } from './reducers/articlesCount';
import { errorMessages } from './reducers/errorMessages';
import { pagination } from './reducers/pagination';
import { user } from './reducers/user';

const rootReducer = combineReducers({
  article,
  articles,
  articlesCount,
  errorMessages,
  pagination,
  user,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
