/*
    case 148 : request로 구글 크롤링하기 (p276)
*/
const request = require('request');

// request로 구글 크롤링
// request(요청(JSON),handling)
request({
    url : 'https://news.naver.com/',
    method: 'GET',
}, (error, response, body) => console.log(body));