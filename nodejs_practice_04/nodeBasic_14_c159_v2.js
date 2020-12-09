/*
    case 159 : winston 모듈 - ver2 (p302) 
    => 특정 로그 파일을 생성하고 작성하는데 쓰이는 모듈
    => 예제에서 사용된 모듈은 2X버젼이므로 3X버젼으로 재구성함
    => winston-daily-rotate-file과 moment를 활용하는 방식
*/
const winston = require('winston');
require('winston-daily-rotate-file');
const moment = require('moment');

function tsFormat() {
  return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      timestamp: tsFormat,
      colorize: true,
      showlevel: true,
      level: 'debug'
    }),
    new winston.transports.DailyRotateFile({
      level: 'info',
      filename: 'nodejs_practice_04/Log/logs',
      timestamp: tsFormat,
      datePattern: '_yyyy-MM-dd',
      showlevel: true,
      maxsize: 1000000,
      maxFiles: 5
    })
  ],
  exceptionHandlers: [
    new winston.transports.DailyRotateFile({
      level: 'info',
      filename: 'nodejs_practice_04/Log/exception',
      timestamp: tsFormat,
      datePattern: '_yyyy-MM-dd',
      showlevel: true,
      maxsize: 1000000,
      maxFiles: 5
    }),
    new winston.transports.Console({
      timestamp: tsFormat,
      colorize: true,
      showlevel: true,
      level: 'debug'
    })
  ],
});

logger.info('인포 로깅');
logger.error('에러 로깅');
