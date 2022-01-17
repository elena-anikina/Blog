import { checkingAuthentication } from '../redux/actions';

export default class RealworldApi {
  baseUrl100 = 'http://kata.academy:8022/api';
  baseUrl = 'https://api.realworld.io/api';
  baseUrl3 = 'https://cirosantilli-realworld-next.herokuapp.com/api';
  token = localStorage.getItem('token');
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  getHeaders = () => {
    console.log('inside getHeaders');
    return this.token ? { ...this.headers, Authorization: `Token ${this.token}` } : this.headers;
  };

  async getArticles(token) {
    return fetch(`${this.baseUrl}/articles?limit=50`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token ? `Token ${token}` : null,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка, статус ошибки ${response.status}`);
      }
      return response.json();
    });
  }

  async registerUser(username, email, password) {
    return fetch(`${this.baseUrl}/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: { username, email, password },
      }),
    })
      .then((response) => response.json())
      .catch((err) => err);
  }

  async loginUser(email, password) {
    return fetch(`${this.baseUrl}/users/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: { email, password },
      }),
    }).then(
      (response) => {
        console.log(response);
        return response.json();
      },
      (error) => error
    );
  }

  async getCurrentUser() {
    return fetch(`${this.baseUrl}/user`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка, статус ошибки ${response.status}`);
      }
      return response.json();
    });
  }

  async updateUser(email, username, password, image) {
    return fetch(`${this.baseUrl}/user`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        user: { email, username, password, image },
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка, статус ошибки ${response.status}`);
      }
      return response.json();
    });
  }

  async createArticle(title, description, body, tagList) {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        article: { title, description, body, tagList },
      }),
    }).then((response) => response.json());
  }

  async getArticle(slug) {
    return fetch(`${this.baseUrl}/articles/${slug}`).then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка, статус ошибки ${response.status}`);
      }
      return response.json();
    });
  }

  async editArticle(slug, title, description, body, tagList) {
    return fetch(`${this.baseUrl}/articles/${slug}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        article: { title, description, body, tagList },
      }),
    }).then((response) => response.json());
  }

  async deleteArticle(slug) {
    return fetch(`${this.baseUrl}/articles/${slug}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    }).then((response) => response);
  }

  async favoriteArticle(slug) {
    return fetch(`${this.baseUrl}/articles/${slug}/favorite`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    }).then((response) => response.json());
  }

  async unFavoriteArticle(slug) {
    return fetch(`${this.baseUrl}/articles/${slug}/favorite`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    }).then((response) => response.json());
  }
}
