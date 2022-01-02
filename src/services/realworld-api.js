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
    }

}