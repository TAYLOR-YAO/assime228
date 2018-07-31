import {createStore, combineReducers} from "redux";
const routeReducer = combineReducers({});
const store =  createStore(
    routeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENTION_()
)
export default store;