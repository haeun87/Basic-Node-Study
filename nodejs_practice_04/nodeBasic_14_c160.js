/*
    case 160 : express 모듈 1 - overview (p306) 
    => http 모듈과 비슷하며 nodejs 서버 개발 시 가장 많이 쓰이는 모듈
*/

const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello express module');
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});