/*
    case 155 : ejs 모듈 2 (p290)
*/
const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    fs.readFile('./nodejs_practice_02/nodeBasic_12_c155.ejs', 'utf-8', (error, data) => {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(ejs.render(data,{
            table_name: 'Multiplication table 19 X ?',
            number : '19',
        }));
    });
}).listen(50000,()=>{
    console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});