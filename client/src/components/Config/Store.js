// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import {createStore, combineReducers} from "redux";
// import CartReducer from "../features/CartPage/CartReducer";

// const persistConfig = {
//     key: 'cart',
//     storage: storage,
//     stateReconciler: autoMergeLevel2
// };


// const rootReducer = combineReducers({
//     cart: CartReducer
// });
// const pReducer = persistReducer(persistConfig, rootReducer);

//  const store = createStore(
//     pReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//    );
// export default store;
// export const persistor = persistStore(store);













import {createStore, combineReducers} from "redux";
import CartReducer from "../features/CartPage/CartReducer";

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