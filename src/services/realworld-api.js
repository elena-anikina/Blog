import { httpMethods } from './httpMethods';
import { headers } from './headers';
import { token } from './token';

class RealworldApi {
  baseUrl000 = '//kata.academy:8022/api';

  baseUrl100 = 'https://api.realworld.io/api';

  baseUrl200 = 'https://cirosantilli-realworld-next.herokuapp.com/api';

  baseUrl = 'https://kata.academy:8021/api';

  getHeaders = () => (token ? { ...headers, Authorization: `Token ${token}` } : headers);

  async getArticles(token, limit, offset) {
    return fetch(`${this.baseUrl}/articles?limit=${limit}&offset=${offset}`, {
      headers: {
        ...headers,
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
      method: httpMethods.POST,
      headers: {
        ...headers,
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
      method: httpMethods.POST,
      headers: {
        ...headers,
      },
      body: JSON.stringify({
        user: { email, password },
      }),
    }).then(
      (response) => response.json(),
      (error) => error
    );
  }

  async getCurrentUser() {
    return fetch(`${this.baseUrl}/user`, {
      method: httpMethods.GET,
      headers: {
        ...headers,
        Authorization: `Token ${token}`,
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
      method: httpMethods.PUT,
      headers: {
        ...headers,
        Authorization: `Token ${token}`,
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
      method: httpMethods.POST,
      headers: {
        ...headers,
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        article: { title, description, body, tagList },
      }),
    }).then((response) => {
      return response.json();
    });
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
      method: httpMethods.PUT,
      headers: {
        ...headers,
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        article: { title, description, body, tagList },
      }),
    }).then((response) => response.json());
  }

  async deleteArticle(slug) {
    return fetch(`${this.baseUrl}/articles/${slug}`, {
      method: httpMethods.DELETE,
      headers: {
        ...headers,
        Authorization: `Token ${token}`,
      },
    }).then((response) => response);
  }

  async favoriteArticle(slug) {
    return fetch(`${this.baseUrl}/articles/${slug}/favorite`, {
      method: httpMethods.POST,
      headers: {
        ...headers,
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());
  }

  async unFavoriteArticle(slug) {
    return fetch(`${this.baseUrl}/articles/${slug}/favorite`, {
      method: httpMethods.DELETE,
      headers: {
        ...headers,
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());
  }
}

export const realWorldApi = new RealworldApi();
