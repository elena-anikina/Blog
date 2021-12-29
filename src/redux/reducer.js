import initialState from './state';
import {v4 as uuid} from 'uuid';

const reducer = (state = initialState, action) => {
    const {articles, errors} = state;
    switch (action.type) {

        case 'FETCH_ARTICLES_SUCCESS':
            const articlesWithId1 = action.articles.map(el => ({id: uuid(), ...el}));
            const articlesWithId2 = action.articles.map(el => ({id: uuid(), ...el}));
            const articlesWithId3 = action.articles.map(el => ({id: uuid(), ...el}));
            return {
                ...state,
                articles: [...articlesWithId1, ...articlesWithId2, ...articlesWithId3]
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
                page: Number(action.page),
                trimStart,
                trimEnd,
                arrowStart: !(Number(action.page) === 1),
                arrowEnd: Number(action.page) < numberOfPages
            }

        default:
            return state;
    }
};

export default reducer;