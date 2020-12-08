/*
    case 154 : ejs 모듈 1 (p288)
*/
const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    fs.readFile('./nodejs_practice_02/nodeBasic_12_c154.ejs', 'utf-8', (error, data) => {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(ejs.render(data));
    });
}).listen(50000,()=>{
    console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});