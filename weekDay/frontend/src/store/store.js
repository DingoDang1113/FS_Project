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

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk,logger)
    )
)

export default configureStore;