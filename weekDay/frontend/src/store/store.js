import { createStore, combineReducers, applyMiddleware } from "redux";
import sessionReducer from "./sessionReducer";
import entitiesReducer from "./entitiesReducer";
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const dummyReducer = (state = {}, action) => state 

const rootReducer = combineReducers({
    session: sessionReducer, 
    entities: entitiesReducer, 
    ui: dummyReducer
})

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk,logger)
    )
)

export default configureStore;