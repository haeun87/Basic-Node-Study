/*
    case 150 : 한글 깨지는 문제 해결하기 (p280)
*/
const request = require('request');
const iconv = require('iconv-lite');

// 파라미터 추가해서 호출하기
request({
    url : 'https://news.naver.com/main/list.nhn',
    method: 'GET',
    qs: {
        mode: 'LSD',
        mid: 'sec',
        sid1: '001'
       },
    encoding: null,
    }, (error, response, body) => {
        const decodedResult = iconv.decode(body, 'euc-kr'); 
        // const decodedResult = iconv.decode(body, 'utf-8'); //깨짐
        console.log(decodedResult);
});