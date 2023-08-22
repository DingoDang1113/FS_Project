import { createStore, combineReducers, applyMiddleware } from "redux";
import sessionReducer from "./sessionReducer";
import entitiesReducer from "./entitiesReducer";
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import errorsReducer from "./errorsReducer";

const logger = createLogger();
const dummyReducer = (state = {}, action) => state 

const rootReducer = combineReducers({
    session: sessionReducer, 
    entities: entitiesReducer, 
    errors: errorsReducer,
    ui: dummyReducer
})





const configureStore = (preloadedState = {}) => {
    const middlewares = [thunk];
    
    if (process.env.NODE_ENV !== 'production') {
        // const logger = require('redux-logger')
        middlewares.push(logger)
    }
    const middlewareEnhancer = applyMiddleware(...middlewares);

    return createStore(
        rootReducer,
        preloadedState,
        middlewareEnhancer
    );

}

export default configureStore;