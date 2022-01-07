import {re} from '../helpers/regex-email';

console.log(re);


const state = {
    authorized: false,
    articles: [],
    pagination: {page: 1, trimStart: 0, trimEnd: 5, arrowStart: false, arrowEnd: true},
    user: null,
    errorMessages: null,
    errors: null
};

export default state;