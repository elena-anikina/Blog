import RealworldApi from "../services/realworld-api";
const realWorldApi = new RealworldApi();

export const fetchArticlesSuccess = (articles) => ({type: 'FETCH_ARTICLES_SUCCESS', articles});

export const fetchArticlesError = () => ({type: 'FETCH_ARTICLES_ERROR'});

export const fetchArticles = () => (dispatch) => {
    console.log('inside fetchArticles');
    realWorldApi.getArticles().then(
        (result) => {
            dispatch(fetchArticlesSuccess(result.articles))
        },
        () => {
            dispatch(fetchArticlesError())
        })
};

export const calcPagination = (e) => {
    const {textContent: page} = e.target;
    return {type: 'CALC_PAGINATION', page};
};