/*
    case 182 : MySQL 7 - 데이터 삭제 (p366) 
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

let deleteColumnQuery = 
`
delete from books
where number = 4 and writer = 'JI'
;
`;

// 수정 쿼리 적용 1
connection.query(deleteColumnQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

let selectColumnQuery = 
`
select * from books
;
`;

// 수정 쿼리 적용 2
connection.query(selectColumnQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 접속 종료 (NOT close())
connection.end();