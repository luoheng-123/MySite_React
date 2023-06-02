import { applyMiddleware, legacy_createStore,compose, combineReducers } from "redux";
import reduxThunk from 'redux-thunk'
import userArticleReducer from './userArticleStatus/reducer'
import userReducer from './userStatus/reducer'
import videoReducer from './videoStatus/reducer'

const reducers = combineReducers({
    userReducer,
    userArticleReducer,
    videoReducer,
})

let composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION__COMPOSE__?window.__REDUX_DEVTOOL_EXTENSION__COMPOSE__({}):compose
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));
export default store