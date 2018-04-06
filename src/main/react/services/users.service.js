import config from '../config/config.js';

export const getUsers = () => {
  return fetch(config.backendBase + config.backendApiUriUsers).then(response => response.json()).then(json => {
    return json['_embedded']['users'];
  });
}