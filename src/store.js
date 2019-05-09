import {
    combineReducers,
    createStore
} from 'redux';

import {posts} from './reducers/posts';
import selectedid from './reducers/selectedid';

const FREQUENCY = 2000;
const LS_KEY = 'blog-redux-exercise'

// Pass an object to combineReducers
// Object should be shaped like state.

const rootReducer = combineReducers({
    posts,
    selectedid
});

// check localStorage for any previously saved app state
// if it's there, pass as second argument to createStore
let initialState = JSON.parse(localStorage.getItem(LS_KEY)) || {};


// const dataFromLocalStorage = JSON.parse(localStorage.getItem(LS_KEY));
// if (dataFromLocalStorage){
//     initialState = dataFromLocalStorage;
// }
const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

setInterval(()=>{
        const state=store.getState();
        localStorage.setItem(LS_KEY,JSON.stringify(state));
}, FREQUENCY)

    export default store;
