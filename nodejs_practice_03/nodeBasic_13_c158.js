/*
    case 158 : pug 모듈 3 (p299)
    => 인자를 넘기는 경우에는 compile 후에 받은 콜백 함수에 인자를 포함하여 내보내면 된다.
*/
const pug = require('pug');
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    fs.readFile('./nodejs_practice_03/nodeBasic_13_c158.pug', 'utf-8', (error, data) => {
        response.writeHead(200, {'Content-Type': 'text/html'});
        const fn = pug.compile(data);
        response.end(fn({
            table_name: 'Multiplication table 19 X ?',
            number: '19'
        }));
    });
}).listen(50000,()=>{
    console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});