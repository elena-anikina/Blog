import {re} from '../helpers/regex-email';

console.log(re);


const state = {
    authorized: false,
    articles: [],
    signUp: [
        {label: "Username", value: ""},
        {label: "Email address", condition: [{'pattern': re}], value: ""},
        {label: "Password", value: ""},
        {label: "Repeat Password", placeholder: "Password", value: ""}
    ],
    pagination: {page: 1, trimStart: 0, trimEnd: 5, arrowStart: false, arrowEnd: true},
    user: null,
    errorMessages: null,
    errors: null
};

export default state;