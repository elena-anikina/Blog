export const token = {
  get() {
    return localStorage.getItem('token');
  },

  set(value) {
    return localStorage.setItem('token', value);
  },

  remove() {
    return localStorage.removeItem('token');
  },
};
