/*
    case 180 : MySQL 5 - 데이터 조회 & 기보적인 WHERE 절 (p358) 
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

// 전체 조회
let selectTableQuery = `select * from books`;
connection.query(selectTableQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 일부 조회(번호, 책이름, 저자)
selectTableQuery = `select number, name, writer from books`;
connection.query(selectTableQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 조건 조회(where)
selectTableQuery = `select * from books where genre = 'action'`;
connection.query(selectTableQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 조건 조회(where + or)
selectTableQuery = `select * from books where genre = 'action' or genre = 'comedy'`;
connection.query(selectTableQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 조건 조회(where + like)
selectTableQuery = `select * from books where releasedate LIKE '2017%'`;
connection.query(selectTableQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 정렬 조회(order by [asc](생략 가능))
selectTableQuery = `select * from books order by releasedate`;
connection.query(selectTableQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 정렬 조회(order by desc)
selectTableQuery = `select * from books order by releasedate desc`;
connection.query(selectTableQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 접속 종료 (NOT close)
connection.end();