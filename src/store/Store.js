import reducer from './reducer';

import { legacy_createStore, applyMiddleware, compose,combineReducers } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    counter:reducer,
})
export const store = legacy_createStore(rootReducer, composeEnhancers());