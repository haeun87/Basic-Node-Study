/*
    case 149 : request로 파라미터 추가해 호출하기 (p278)
*/
const request = require('request');

// 파라미터 추가해서 호출하기
request({
 url : 'https://news.naver.com/main/list.nhn',
 method: 'GET',
 qs: {
     mode: 'LSD',
     mid: 'sec',
     sid1: '001'
    }
}, (error, response, body) => console.log(body));