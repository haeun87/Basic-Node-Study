/*
    case 151 ~ case 153: cheerio  
    => 참고 스크립트 : crawler.js
    * cheerio : 웹 스크래핑 모듈
        => html에서 jquery 문법을 통해 태그 등에 접근하여 필요한 정보를 스크래핑함
*/


const cheerio = require('cheerio');
const crawler = require('./crawler');
const fs = require('fs');
/* 
case 151: cheerio의 기본 작동 (p282)
const $ = cheerio.load(
    `<html>
        <h2 class="title">hello</h2>
    </html>`
    );

const titleText = $('h2.title').text();

console.log('titleText:', titleText);
*/

const parse = (decodeResult) => {
    const $ = cheerio.load(decodeResult);
    const titles = $('div .list_area').find('span');
    console.log(titles);
    titles.each((index, element) => {
        const title = $(element).text();
        console.log(title);
        fs.appendFile('./titles.text', `${title}\n`);// 파일에 저장
    });
};

crawler.crawl(parse)({ q: '서울대입구역 맛집'});