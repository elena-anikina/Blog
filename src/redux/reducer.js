import initialState from './state';
import {v4 as uuid} from 'uuid';

const reducer = (state = initialState, action) => {
    const {articles, errors, signUp} = state;
    switch (action.type) {

        case 'FETCH_ARTICLES_SUCCESS':
            const articlesWithId1 = action.articles.map(el => ({id: uuid(), ...el}));
            const articlesWithId2 = action.articles.map(el => ({id: uuid(), ...el}));
            const articlesWithId3 = action.articles.map(el => ({id: uuid(), ...el}));
            const articlesWithId4 = action.articles.map(el => ({id: uuid(), ...el}));
            return {
                ...state,
                articles: [...articlesWithId1, ...articlesWithId2, ...articlesWithId3, ...articlesWithId4]
            }

        case 'FETCH_ARTICLES_ERROR':
            return {
                ...state,
                errors: errors + 1
            }
        case 'CALC_PAGINATION':
            const numberOfArticlesPerPage = 5;
            const trimStart = (action.page - 1) * numberOfArticlesPerPage;
            const trimEnd  = trimStart + numberOfArticlesPerPage;
            const numberOfArticles = articles.length;
            const numberOfPages = Math.ceil(numberOfArticles / numberOfArticlesPerPage);
            return {
                ...state,
                pagination: {page: Number(action.page), trimStart, trimEnd, arrowStart: !(Number(action.page) === 1), arrowEnd: Number(action.page) < numberOfPages},
                page: Number(action.page),
                trimStart,
                trimEnd,
                arrowStart: !(Number(action.page) === 1),
                arrowEnd: Number(action.page) < numberOfPages
            }

        case 'INPUT_CHANGE_SIGNUP': {
            const newSignUp = [...signUp].map(el => {
                if (el.label === action.name) {return {...el, value: action.value}}
                return el;
            });
            return {
                ...state,
                signUp: newSignUp
            }
        }

        case 'SIGNUP_SUCCESS': {
            const newSignUp = [...signUp].map(el => {
                return {...el, value: ''}
            });
            return {
                ...state,
                signUp: newSignUp,
                errorMessages: null,
                user: action.user
            }
        }
        case 'SIGNUP_ERROR':
            const newSignUp = [...signUp].map(el => {
                return {...el, value: ''}
            });
            return {
                ...state,
                signUp: newSignUp,
                errorMessages: action.error
            }
        case 'SIGN_IN_SUCCESSFUL':
            localStorage.setItem('token', action.user.token);
            const token = localStorage.getItem('user');
            console.log(token);
            console.log(action.user);
            return {
                ...state,
                user: action.user,
                errorMessages: null
            }
        case 'SIGN_IN_ERROR':
            return {
                ...state,
                errorMessages: action.errors
            }

        case 'LOG_OUT':
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
};

export default reducer;