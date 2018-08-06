import {createStore, combineReducers} from "redux";
import CartReducer from "../features/CartPage/CartReducer";
const routeReducer = combineReducers({
    cart: CartReducer
});
const store = createStore(
    routeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

export default store;