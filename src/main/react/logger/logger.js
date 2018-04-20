import config from '../config/config.js';
import * as Configuration from 'log4js/lib/configuration';

const log4js = require('log4js');

var appender;
switch(config.logDestination) {
  case 'console':
    appender = require('log4js/lib/appenders/console');
    break;
  case 'file':
    appender = require('log4js/lib/appenders/file');
    break;
  /*case 'logstash':
    appender = require('log4js-logstash');
    break;*/
  default:
    appender = require('log4js/lib/appenders/console');
}

Configuration.prototype.loadAppenderModule = function(type) {
  return appender;
};

let appenderConfig;
switch(config.logDestination) {
  case 'console':
    appenderConfig = { console: { type: 'console', disableClustering: true }};
    break;
  case 'file':
    appenderConfig = { file: { type: 'file', filename: 'logs/app.log' }};
    break;
  /*case 'logstash':
    appenderConfig = { logstash: {
      type: 'log4js-logstash',
      host: config.logHost,
      port: config.logPort,
      fields: {
        app: 'ReactApp',
        environment: config.production ? 'production' : 'development',
      },
    }};
    break;*/
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