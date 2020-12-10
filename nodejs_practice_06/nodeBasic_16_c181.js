/*
    case 181 : MySQL 6 - 데이터 수정 (p364) 
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

let updateColumnQuery = 
`
update books 
set genre = 'action' 
where number = 4 and name = 'Mygiant Nerd Boyfriend' 
;
`;

// 수정 쿼리 적용 1
connection.query(updateColumnQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

updateColumnQuery = 
`
update books 
set genre = 'romance', writer = 'JI' 
where number = 4 and name = 'Mygiant Nerd Boyfriend' 
;
`;

// 수정 쿼리 적용 2
connection.query(updateColumnQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 접속 종료 (NOT close())
connection.end();