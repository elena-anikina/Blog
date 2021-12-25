import {createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';
import reducer from "./reducer";
import { composeEnhancers } from '../helpers/compose-enhancers';


const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;