import config from '../config/config.js';
//import logger from '../logger/logger.js';

export const getEnvironment = () => {
  //logger.info("Fecthing environment-service at: " + config.backendBase + config.backendApiUriEnvironment);
  return fetch(config.backendBase + config.backendApiUriEnvironment).then(response => response.json()).then(json => {
    return json['_embedded']['environment'];
  });
};