/*
    case 161 : express 모듈 2 - response (p306) 
    * app.get은 두가지로 쓰일 수 있다.
        1) Http get용도의 get() : get 통신을 수행한다
        2) app.set에 대응하는 get() : app에 설정한 프로퍼티를 가져온다
*/

const express = require('express');

const app = express();

// localhost:3000에 접속할 때 바로 보이는 응답 화면
app.get('/', (request, response) => {
    const result = [];
    const multipleNumber = 9;
    for(let i=1; i< 5; i++){
        result.push({
            number: `${multipleNumber}X${i}`,
            multiple: multipleNumber * i
        });
    }
    response.send(result);
});

// localhost:3000/error 페이지에 접속할 때 바로 보이는 응답 화면
app.get('/error', (request, response) => {
    response.status(404).send('404 ERROR');
});

app.listen(3000, () =>{
    console.log('Server is running port 3000! => GOTO http://localhost:3000');
});

