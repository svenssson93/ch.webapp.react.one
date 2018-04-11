import config from '../config/config.js';
import { configure, getLogger } from 'log4js';
import * as Configuration from 'log4js/lib/configuration';

var appender;
switch(config.logDestination) {
  case 'console':
    appender = require('log4js/lib/appenders/console');
    break;
  case 'file':
    appender = require('log4js/lib/appenders/file');
    break;
  default:
    appender = require('log4js/lib/appenders/file');
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
    appenderConfig = { file: { type: 'file', filename: 'app.log' }};
    break;
  default:
    appenderConfig = { console: { type: 'console', disableClustering: true }};
}

configure({
  appenders: appenderConfig,
  categories: {
    default: {
      appenders: [config.logDestination],
      level: config.logLevel,
    },
  },
});

var logger = getLogger(config.logDestination);

export default logger;