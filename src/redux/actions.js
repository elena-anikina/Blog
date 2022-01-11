import RealworldApi from "../services/realworld-api";
import {re} from "../helpers/regex-email";
import {useForm} from "react-hook-form";
import {useLocation} from "react-router-dom";
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

export const signUpSubmit = (data, reset) => {
    console.log(data);
    const {Username: username, 'Email address': email, Password: password} = data;
    console.log(username, email, password)
    return (dispatch) => {
        realWorldApi.registerUser(username, email, password)
            .then(
                (result) => {
                    reset();
                    if (result.user) { dispatch(signUpSuccess(result.user)) }
                    if (result.errors) { dispatch(signUpError(result.errors)) }
            }
            ).catch(err => {
                reset();
                console.log(err)
        })
    }
};

export const signInSuccessful = (user) => ({type: 'SIGN_IN_SUCCESSFUL', user});

export const signInError = (errors) => ({type: 'SIGN_IN_ERROR', errors});

export const signInSubmit = (data, reset, navigate, fromPage) => {
    const {'Email address': email, Password: password} = data;
    console.log(email, password);
    return (dispatch) => {
        return realWorldApi.loginUser(email, password)
            .then(response => {
                console.log(response);
                reset();
                return response.user ? dispatch(signInSuccessful(response.user)) : dispatch(signInError(response.errors))
            })
            .catch(err => {
                console.log(err);
                reset();
            })
    }
};

export const checkingAuthentication = () => {
    console.log('inside checkingAuthentication');
    // const location = useLocation();
    // const fromPage = location.state?.from?.pathname || '/';
    //
    // console.log(location);
    // console.log(fromPage);

    return (dispatch) => {
        return realWorldApi.getCurrentUser()
            .then(response => response.user ? dispatch(signInSuccessful(response.user)) : dispatch(signInError(response.errors)))
            .catch(err => console.log(err))
    }
};

export const logOut = () => {
    localStorage.removeItem('token');
    return ({type: 'LOG_OUT'})
};

export const editProfileSuccess = (user) => ({type: 'EDIT_PROFILE_SUCCESS', user});

export const editProfileError = (error) => ({type: 'EDIT_PROFILE_ERROR', error});

// export const showResultMessage = () => ({type: 'SHOW_RESULT_MESSAGE'});

export const hideResultMessage = () => ({type: 'HIDE_RESULT_MESSAGE'});

export const editProfile = (data) => {
    console.log(data);
    const {"Avatar image (url)": image, "Email address": email, "New password": password, "Username": username} = data;

    console.log(image, email, password, username);
    return (dispatch) => {
        realWorldApi.updateUser(email, username, password, image)
            .then(response => {
                if(response.user) {
                    console.log(response.user);
                    localStorage.setItem('token', response.user.token);
                    dispatch(hideResultMessage());
                    dispatch(editProfileSuccess(response.user))
                } else {
                    console.log(response);
                    dispatch(editProfileError(response.errors))
                }
            })
            .catch(err => console.log(err))
    }
};

export const getArticleForEditingSuccess = (article) => ({type: 'GET_ARTICLE_SUCCESS', article});

export const getArticleForEditingError = (error) => ({type: 'GET_ARTICLE_ERROR', error});

export const getArticleForEditing = (slug) => {
    return (dispatch) => {
        return realWorldApi.getArticle(slug)
            .then((response) => {
            return response.article ? dispatch(getArticleForEditingSuccess(response.article)) : dispatch(getArticleForEditingError(response.errors))
        })
            .catch(err => console.log(err))
    }
};
