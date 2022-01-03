import RealworldApi from "../services/realworld-api";
const realWorldApi = new RealworldApi();

export const fetchArticlesSuccess = (articles) => ({type: 'FETCH_ARTICLES_SUCCESS', articles});

export const fetchArticlesError = () => ({type: 'FETCH_ARTICLES_ERROR'});

export const fetchArticles = () => (dispatch) => {
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

export const signUpSuccess = (user) => ({type: 'SIGNUP_SUCCESS', user});

export const signUpError = (error) => ({type: 'SIGNUP_ERROR', error});

export const signUpSubmit = (data) => {
    console.log(data);
    const {Username: username, 'Email address': email, Password: password} = data;
    console.log(username, email, password)
    return (dispatch) => {
        // realWorldApi.registerUser(username, email, password)
        //     .then(
        //         (result) => {
        //             if (result.errors) { dispatch(signUpError(result.errors)) }
        //             if (result.user) { dispatch(signUpSuccess(result.user)) }
        //
        //     },
        //         (error) => {
        //             console.log(error);
        //         }
        //     )
    }
};