import { applyMiddleware, legacy_createStore,compose, combineReducers } from "redux";
import reduxThunk from 'redux-thunk'
// import countReducer from './countReducer'
import userReducer from './userStatus/reducer'

const reducers = combineReducers({
    userReducer,
    // countReducer
})

let composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION__COMPOSE__?window.__REDUX_DEVTOOL_EXTENSION__COMPOSE__({}):compose
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));
export default store