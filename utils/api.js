const axios = require("axios");

const thisAxios = axios.create({
  headers: {
    'Authorization': 'token f4f46bce8ccce5743275141eca042d26ade5dc1b'
  }
})

const api = {
  getUserRepo(username) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    const response = thisAxios.get(queryUrl);
    return response;
  },
  getLanguage(url) {
    const response = axios.get(url);
    return response;
  },
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    return thisAxios.get(queryUrl);
  }
};

module.exports = api;
