/*
    case 159 : winston 모듈 - ver1 (p302)
    => 특정 로그 파일을 생성하고 작성하는데 쓰이는 모듈
    => 예제에서 사용된 모듈은 2X버젼이므로 3X버젼으로 재구성함
    => 가장 기본적인 사용법
*/
const winston = require('winston');

const logger = winston.createLogger({
    loger: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({
        filename: 'nodejs_practice_04/Log/logs.log', 
        level: 'info'
        }),
        new winston.transports.File({
        filename: 'nodejs_practice_04/Log/exception.log',
        level: 'error'
        }),
        new winston.transports.Console()
    ],
    exitOnError: false
  });

logger.info('시작!');
logger.info('인포 로깅');
logger.error('에러 로깅');
logger.debug('확인!!');