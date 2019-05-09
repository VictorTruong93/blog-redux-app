import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

// comment out later
window.store = store

ReactDOM.render(<App />, document.getElementById('root'));

const FREQUENCY = 2000;
const LS_KEY = 'blog-redux-exercise'
let saveInterval = setInterval(()=>{
    const state=store.getState();
    localStorage.setItem(LS_KEY,JSON.stringify(state));
}, FREQUENCY)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
