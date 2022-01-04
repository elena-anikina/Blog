import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from './redux/store';
import {BrowserRouter} from "react-router-dom";
import App from './components/app/app';
import RealworldApi from "./services/realworld-api";

const realWorldApi = new RealworldApi();


realWorldApi.getCurrentUser().then(response => console.log(response))


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);