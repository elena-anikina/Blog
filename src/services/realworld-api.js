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
}