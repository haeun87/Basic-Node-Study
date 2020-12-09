/*
    case 164 : express 모듈 5 - static 미들웨어 (p316) 
        => multimedia에 포함된 img는 저작권 관계상 비포함
*/

const express = require('express');

const app = express();

// 웹페이지에 등록할 이미지명
let imgName = "/david-clode-Ws6Tb1cI0co-unsplash.jpg"

app.use(express.static(`${__dirname}/multimedia`));
app.use( (request, response) => {
    response.writeHead('200', {'Content-Type': 'text/html;charset=utf8' });
    response.end(`<img src="${imgName}" width="100%"/>`);
});
app.listen(3000, () =>{
    console.log('Server is running port 3000! => GOTO http://localhost:3000');
});

