
import {createStore, combineReducers} from "redux";
import CartReducer from "./CartReducer";

function saveToLocatStorage(state){
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("state", serialisedState)
    }catch(err){
        console.log(err)
    }
}

function loadFromLocatStorage(){
    try{
        const serialisedState = localStorage.getItem("state");
        if(serialisedState === null) return undefined
        return JSON.parse(serialisedState)

    }catch(err){
        console.log(err)
        return undefined
    }
}


const rootReducer = combineReducers({
    cart: CartReducer
});

const persistedState = loadFromLocatStorage()

const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

   store.subscribe(()=>saveToLocatStorage(store.getState()))
export default store;