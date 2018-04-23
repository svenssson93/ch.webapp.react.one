import fetch from 'node-fetch';
import config from '../config/config';

const logger = (lvl, msg) => {
  fetch(config.url + config.logApi, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      level: lvl,
      data: msg,
    })
  });
}

export default logger;