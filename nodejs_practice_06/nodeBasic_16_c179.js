/*
    case 179 : MySQL 4 - 데이터 삽입 (p356) 
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

let insertColumnQuery = 
`
insert into books (genre, name, writer, releasedate) values
('fantasy', 'LUMINE', 'Emma Krogell', '2015-05-15'),
('comedy', 'Mygiant Nerd Boyfriend', 'fishball', '2017-03-03'), 
('romance', 'I Love You', 'Quimchee', '2016-08-21'),
('action', 'Tower of God', 'SIU', '2017-10-01'),
('action', 'Rise from Ashes', 'Madeleine Rosca', '2016-01-13')
;

`;

// query는 일반 문자열로 받는다.
connection.query(insertColumnQuery, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});


// 접속 종료 (NOT close())
connection.end();