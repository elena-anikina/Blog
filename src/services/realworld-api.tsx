import { httpMethods } from './httpMethods';
import { headers } from './headers';
import { token } from './token';
import {baseUrl} from './baseUrl';

class RealworldApi {

  getHeaders = () => (token.get() ? { ...headers, Authorization: `Token ${token.get()}` } : headers);

  async getArticles(unused, limit, offset) {
    return fetch(`${baseUrl}/articles?limit=${limit}&offset=${offset}`, {
      headers: {
        ...headers,
        Authorization: token.get() ? `Token ${token.get()}` : null,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка, статус ошибки ${response.status}`);
      }
      return response.json();
    });
  }

  async registerUser(username, email, password) {
    return fetch(`${baseUrl}/users`, {
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
    return fetch(`${baseUrl}/users/login`, {
      method: httpMethods.POST,
      headers: {
        ...headers,
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
    return fetch(`${baseUrl}/user`, {
      method: httpMethods.GET,
      headers: {
        ...headers,
        Authorization: `Token ${token.get()}`,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка, статус ошибки ${response.status}`);
      }
      return response.json();
    });
  }

  async updateUser(email, username, password, image) {
    return fetch(`${baseUrl}/user`, {
      method: httpMethods.PUT,
      headers: {
        ...headers,
        Authorization: `Token ${token.get()}`,
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
    return fetch(`${baseUrl}/articles`, {
      method: httpMethods.POST,
      headers: {
        ...headers,
        Authorization: `Token ${token.get()}`,
      },
      body: JSON.stringify({
        article: { title, description, body, tagList },
      }),
    }).then((response) => response.json());
  }

  async getArticle(slug) {
    return fetch(`${baseUrl}/articles/${slug}`).then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка, статус ошибки ${response.status}`);
      }
      return response.json();
    });
  }

  async editArticle(slug, title, description, body, tagList) {
    return fetch(`${baseUrl}/articles/${slug}`, {
      method: httpMethods.PUT,
      headers: {
        ...headers,
        Authorization: `Token ${token.get()}`,
      },
      body: JSON.stringify({
        article: { title, description, body, tagList },
      }),
    }).then((response) => response.json());
  }

  async deleteArticle(slug) {
    return fetch(`${baseUrl}/articles/${slug}`, {
      method: httpMethods.DELETE,
      headers: {
        ...headers,
        Authorization: `Token ${token.get()}`,
      },
    }).then((response) => response);
  }

  async favoriteArticle(slug) {
    return fetch(`${baseUrl}/articles/${slug}/favorite`, {
      method: httpMethods.POST,
      headers: {
        ...headers,
        Authorization: `Token ${token.get()}`,
      },
    }).then((response) => response.json());
  }

  async unFavoriteArticle(slug) {
    return fetch(`${baseUrl}/articles/${slug}/favorite`, {
      method: httpMethods.DELETE,
      headers: {
        ...headers,
        Authorization: `Token ${token.get()}`,
      },
    }).then((response) => response.json());
  }
}

export const realWorldApi = new RealworldApi();
