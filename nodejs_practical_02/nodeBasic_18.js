const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4589',
    database: 'comicbook',
    port: '3306'
});

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(3000, () => {
    console.log('Server is running port 3000! => GOTO : http://localhost:3000')
});

connection.connect();

//조회 페이지
app.get('/', (request, response) => {
    fs.readFile(`${__dirname}/booklist.html`,'utf-8', (error, data) =>{
        connection.query('SELECT * from books', (error, results, fields) => {
            if (error) throw error;
            response.send(ejs.render(data,{
                data: results
            }));
        });
    });
});

// 데이터 추가 페이지
app.get('/create', (request, response) => {
    fs.readFile(`${__dirname}/insertNewBook.html`,'utf-8', (error, data) =>{
        if (error) throw error;
        response.send(data);
        
    });
});

// 데이터 추가 로직
app.post('/create', (request, response) => {
   const body = request.body;
   connection.query(
       'INSERT INTO books (genre, name, writer, releasedate) VALUE (?, ?, ?, ?)',
       [body.genre, body.name, body.writer, body.releasedate],
       (error, data) => {
            if (error) throw error;
            response.redirect('/');
       });
});

//데이터 수정 페이지
app.get('/modify/:id', (request, response) => {
    fs.readFile(`${__dirname}/modify.html`,'utf-8', (error, data) =>{
        connection.query(
            'SELECT * from books WHERE number = ?',
            [request.params.id],
            (error, results, fields) => {
            if (error) throw error;
            console.log('현재 조회된 번호 =',request.params.id);
            response.send(ejs.render(data,{
                data: results[0]
            }));
        });
    });
});

//데이터 수정 로직
app.post('/modify/:id', (request, response) => {
    const body = request.body;
    connection.query(
        'UPDATE books SET genre = ?, name = ?, writer = ? WHERE number = ?',
        [body.genre, body.name, body.writer, request.params.id],
        (error, data) => {
            if (error) throw error;
            response.redirect('/');
        });   
});

//데이터 수정 페이지
app.get('/delete/:id', (request, response) => {
    connection.query(
        'DELETE FROM books WHERE number = ?',
        [request.params.id],
        (error, data) => {
            if (error) throw error;
            response.redirect('/');
        }); 
});

// connection.end();