import initialState from './state';
import {v4 as uuid} from 'uuid';

const reducer = (state = initialState, action) => {
    const {articles, errors, signUp} = state;
    switch (action.type) {

        case 'FETCH_ARTICLES_SUCCESS':
            const articlesWithId1 = action.articles.map(el => ({id: uuid(), ...el}));
            return {
                ...state,
                articles: [...articlesWithId1]
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
                ...state
            }
        }

        case 'SIGNUP_SUCCESS': {
            localStorage.setItem('token', action.user.token);
            return {
                ...state,
                errorMessages: null,
                user: action.user,
                loadingUser: false
            }
        }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                errorMessages: action.error,
                loadingUser: false
            }
        case 'SIGN_IN_SUCCESSFUL':
            localStorage.setItem('token', action.user.token);
            console.log(localStorage.getItem('token'))

            const token = localStorage.getItem('token');
            console.log(token);
            console.log(action.user);
            return {
                ...state,
                user: action.user,
                errorMessages: null,
                loadingUser: false
            }
        case 'SIGN_IN_ERROR':
            return {
                ...state,
                errorMessages: action.errors,
                loadingUser: false
            }

        case 'LOG_OUT':
            return {
                ...state,
                user: null,
                loadingUser: false
            }

        case 'EDIT_PROFILE_SUCCESS':
            return {
                ...state,
                user: action.user,
                errorMessages: null,
                loadingUser: false
            }

        case 'EDIT_PROFILE_ERROR':
            return {
                ...state,
                errorMessages: action.error,
                loadingUser: false
            }
        default:
            return state;
    }
};

export default reducer;