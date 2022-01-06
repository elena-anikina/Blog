import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from './redux/store';
import {BrowserRouter} from "react-router-dom";
import App from './components/app/app';
import RealworldApi from "./services/realworld-api";

const realWorldApi = new RealworldApi();

//
// realWorldApi.updateUser('ellen2023@gmail.com', 'ellen2023', '12345', "https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/101885083_3200517996646638_5586156352054493184_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_qp5Yk7h8N4AX-Dou1K&tn=Pngs7xVIlzv38BmU&_nc_ht=scontent-arn2-1.xx&oh=00_AT8OsWP4k4Vw9_0-yeppsp11iPnTFyecr7AV8fklpaXGrw&oe=61F99C3E")
//     .then(response => console.log(response));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);