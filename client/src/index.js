import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import store from "./components/Config/Store";
import './index.css';
import App from './App';

const app = <Provider store ={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>
ReactDOM.render(app, document.getElementById('root'));
