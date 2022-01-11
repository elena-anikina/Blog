import {re} from '../helpers/regex-email';

console.log(re);


const state = {
    authorized: false,
    articles: [],
    article: null,
    pagination: {page: 1, trimStart: 0, trimEnd: 5, arrowStart: false, arrowEnd: true},
    loadingUser: true,
    user: null,
    errorMessages: null,
    errors: null,
    resultMessage: false
};

export default state;