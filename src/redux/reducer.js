import initialState from './state';
import {v4 as uuid} from 'uuid';

const reducer = (state = initialState, action) => {
    const {articles, errors} = state;
    switch (action.type) {

        case 'FETCH_ARTICLES_SUCCESS':
            const articlesWithId = action.articles.map(el => ({id: uuid(), ...el}));
            return {
                ...state,
                articles: [...articles, ...articlesWithId]
            }

        case 'FETCH_ARTICLES_ERROR':
            return {
                ...state,
                errors: errors + 1
            }

        default:
            return state;
    }
};

export default reducer;