import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from './redux/store';
import {BrowserRouter} from "react-router-dom";
import App from './components/app/app';

fetch('https://api.realworld.io/api/users/login', {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "user":{
            "email": "elenaanikina1988@amazon.com",
            "password": "thebestpassword22"
        }
    })
}).then(response => {
    console.log(response);
    return response.json()
}).then(result => {
    console.log(result)
})


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);