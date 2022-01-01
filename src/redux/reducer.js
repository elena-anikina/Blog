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

        case 'INPUT_CHANGE_SIGNUP':
            const newSignUp = [...signUp].map(el => {
                if (el.label === action.name) {return {...el, value: action.value}}
                return el;
            });
            return {
                ...state,
                signUp: newSignUp
            }
        default:
            return state;
    }
};

export default reducer;