import initialState from './state';

const reducer = (state = initialState, action) => {
    const {articles, errors} = state;
    switch (action.type) {

        case 'FETCH_ARTICLES_SUCCESS':
            return {
                ...state,
                articles: action.articles
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