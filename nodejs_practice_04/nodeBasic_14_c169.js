/*
    case 169 : express 모듈 10 - connect-multiparty 미들웨어 (p329) 
    => upload 폴더 내 resource는 비포함
*/
const express = require('express');
const fs = require('fs');
const multipart = require('connect-multiparty');

const app = express();

app.use(multipart({
    uploadDir: `${__dirname}/upload`
}));

app.get('/', (request, response) => {
    fs.readFile(`${__dirname}/connect-multiparty.html`, (error, data) => {
        response.send(data.toString());
    });
});

app.post('/', (request, response) => {
    const imgFile = request.files.image;
    const outputPath = `${__dirname}/upload/${Date.now()}_${imgFile.name}`;
    console.log(outputPath);
    console.log(request.body, request.files);
    fs.rename(imgFile.path, outputPath, () => {
        response.redirect('/');
    });
});

app.listen(3000, () => {
    console.log('Server is running port 3000! => GOTO http://localhost:3000');
});

