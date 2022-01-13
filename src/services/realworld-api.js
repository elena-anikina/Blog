import {re} from "../helpers/regex-email";

export default class RealworldApi {

    baseUrl = 'http://kata.academy:8022';
    baseUrl2 = 'https://api.realworld.io/api';
    baseUrl3 = 'https://cirosantilli-realworld-next.herokuapp.com/api';

    async getArticles() {
        return fetch(`${this.baseUrl2}/articles`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                console.log(response);
                if (!response.ok) {throw new Error(`Ошибка, статус ошибки ${response.status}`)}
                return response.json();
            })
    }


    async registerUser(username, email, password) {
        return fetch(`${this.baseUrl2}/users`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {username, email, password}
            })
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err))
    }

    async loginUser(email, password) {
        return fetch(`${this.baseUrl2}/users/login`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {email, password}
            })
        })
            .then(
                response => {
                console.log(response);
                return response.json()
            },
                error => console.log(error)
            )
    }

    async getCurrentUser() {
        return fetch(`${this.baseUrl2}/user`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                if (!response.ok) {throw new Error(`Ошибка, статус ошибки ${response.status}`)}
                return response.json();
            })
    };

    async updateUser(email, username, password, image) {
        return fetch(`${this.baseUrl2}/user`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                user: {email, username, password, image}
            })
        })
            .then(response => {
                console.log(response);
               // if (!response.ok) {throw new Error(`Ошибка, статус ошибки ${response.status}`)}
                return response.json();
            })
    }

    async createArticle(title, description, body, tagList) {
        console.log(localStorage.getItem('token'));
        return fetch(`${this.baseUrl2}/articles`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                "article": {title, description, body, tagList}
            })
        }).then(response => {
            console.log(response);
            return response.json();
        })
    }

    async getArticle(slug) {
        return fetch(`${this.baseUrl2}/articles/${slug}`)
            .then(response => {
                if (!response.ok) {throw new Error(`Ошибка, статус ошибки ${response.status}`)}
                return response.json()
            });
    }

    async editArticle(slug, title, description, body, tagList) {
        return fetch(`${this.baseUrl2}/articles/${slug}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                'article': {title, description, body, tagList}
            })
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
    }

    async deleteArticle(slug) {
        return fetch(`${this.baseUrl2}/articles/${slug}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                console.log(response);
            })
    }
}