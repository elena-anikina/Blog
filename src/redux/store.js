import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducer';
import composeEnhancers from '../helpers/compose-enhancers';

// const rootReducer = combineReducers({});

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
