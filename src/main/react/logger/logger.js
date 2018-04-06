import bunyan from 'bunyan';
import config from '../config/config.js'

var logger = bunyan.createLogger({
  name: 'React-App',
  level: config.logLevel,
});

export default logger;