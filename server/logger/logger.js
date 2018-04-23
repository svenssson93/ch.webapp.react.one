import config from '../../src/config/config';
import log4js from 'log4js';

let appenderConfig;
switch(config.logDestination) {
  case 'console':
    appenderConfig = { console: { type: 'console', disableClustering: true }};
    break;
  case 'file':
    appenderConfig = { file: { type: 'file', filename: 'logs/app.log' }};
    break;
  case 'logstash':
    appenderConfig = { logstash: {
      type: 'log4js-logstash',
      host: config.logHost,
      port: config.logPort,
      fields: {
        source: 'ReactApp',
        environment: config.production ? 'production' : 'development',
      },
    }};
    break;
  default:
    appenderConfig = { console: { type: 'console', disableClustering: true }};
}

log4js.configure({
  appenders: appenderConfig,
  categories: {
    default: {
      appenders: [config.logDestination],
      level: config.logLevel,
    },
  },
});

const logger = log4js.getLogger();

export default logger;