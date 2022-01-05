import {re} from "../helpers/regex-email";

export default class RealworldApi {

    baseUrl = 'http://kata.academy:8022';
    baseUrl2 = 'https://api.realworld.io/api'

    async getArticles() {
        return fetch(`${this.baseUrl2}/articles`)
            .then((response) => {
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
            .then(response => {
                return response.json()
            })
    }

    async getCurrentUser() {
        console.log(`Token ${localStorage.getItem('token')}`);
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
            .catch(err => console.log(err))
    };

}