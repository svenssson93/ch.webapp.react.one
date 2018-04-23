import config from '../config/config';
import logger from '../logger/logger';

export const getUsers = () => {
  logger('info', 'Fetching Users-Service at: ' + config.backendBase + config.backendApiUriUsers);
  return fetch(config.backendBase + config.backendApiUriUsers).then(response => response.json()).then(json => {
    return json['_embedded']['users'];
  });
}