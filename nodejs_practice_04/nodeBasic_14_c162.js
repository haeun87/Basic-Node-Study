/*
    case 162 : express 모듈 3 - request (p311) 
    * app.use() : 미들웨어 함수
     => 공통 request나 response의 설정 등
     => request/response 직전에 필요한 로직의 처리
     => 인자는 root path와 콜백 함수이며 최소한 1개 이상의 콜백 함수를 필요로 한다.(path는 옵션. default는 '/'이다.)
*/

const express = require('express');

const app = express();


app.use((request, response) => {
    const agent = request.header('User-Agent');
    const paramName = request.query.name;
    const browserChrome = 'Hello Chrome';
    const browserOthers = 'Hello Others';

    console.log('헤더 =',request.headers);
    console.log('주소 =',request.baseUrl);
    console.log('호스트명 =',request.hostname);
    console.log('프로토콜 =',request.protocol);
    console.log('파라매터 =',request.params);

    if (agent.toLocaleLowerCase().match(/chrome/)){
        response.write(`<div><p>${browserChrome}</p></div>`);
    } else {
        response.write(`<div><p>${browserOthers}</p></div>`);
    }
    response.write(`<div><p>${agent}</p></div>`);
    response.write(`<div><p>${paramName}!!</p></div`);
    response.end();
});

app.listen(3000, () =>{
    console.log('Server is running port 3000! => GOTO http://localhost:3000?name=hello+world');
});

