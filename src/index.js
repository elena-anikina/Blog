import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from './redux/store';
import {BrowserRouter} from "react-router-dom";
import App from './components/app/app';
import RealworldApi from "./services/realworld-api";

const realWorldApi = new RealworldApi();


// realWorldApi.createArticle(
//     'Article Title',
//     'Article Description',
//     'Article Body',
//     ['tag1', 'tag2', 'tag3']
// ).then(response => console.log(response)) // получаю объект Article

// fetch('https://cirosantilli-realworld-next.herokuapp.com/api/articles?author=monaco40')
//     .then(response => response.json())
//     .then(result => console.log(result))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);