const axios = require("axios");

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    const response = axios.get(queryUrl);
    return response;
  },
  getLanguage(url) {
    const response = axios.get(url);
    return response;
  }
};

module.exports = api;
