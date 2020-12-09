/*
    case 178 : MySQL 3 - 테이블 생성 (p356) 
    => html 형식에 파일 첨부까지 포함한 형태
*/
const mysql = require('mysql');

// connection에 관련 설정을 수행함
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4589',
    database: 'comicbook',
    port: '3306'
});

connection.connect();

let createTableQuery = 
`
create table books (number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    genre VARCHAR(20) NOT NULL,
    name VARCHAR(50) NOT NULL,
    writer VARCHAR(30) NOT NULL,
    releasedate date NOT NULL);
`;

// query는 일반 문자열로 받는다.
connection.query(createTableQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

connection.query('describe books', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 접속 종료 (NOT close())
connection.end();