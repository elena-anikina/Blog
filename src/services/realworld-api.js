export default class RealworldApi {

    baseUrl = 'http://kata.academy:8022/';

    async getArticles() {
        return fetch(`${this.baseUrl}articles`)
            .then((response) => {
                if (!response.ok) {throw new Error(`Ошибка, статус ошибки ${response.status}`)}

                return response.json();
            })
    }
}