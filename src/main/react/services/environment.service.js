import config from '../config/config.js';

export const getEnvironment = () => {
  return fetch(config.backendBase + config.backendApiUriEnvironment).then(response => response.json()).then(json => {
    return json['_embedded']['environment'];
  });
};