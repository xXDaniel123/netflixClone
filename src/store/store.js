import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { videoReducer } from './reducers/videoReducer.js';
import { userReducer } from './reducers/userReducer.js';

const rootReducer = combineReducers({
    videoReducer,
    userReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))