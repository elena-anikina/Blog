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

export const inputChangeSignUp = (e) => {
    const {value, name} = e.target;
    console.log(e);
    console.log(name);
    console.log(value);
    return {type: 'INPUT_CHANGE_SIGNUP', value, name};
};

export const signUpSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    return {type: 'SIGNUP_SUBMIT'}
};