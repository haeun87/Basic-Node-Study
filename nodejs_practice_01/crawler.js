const request = require('request');
const iconv = require('iconv-lite');
const charset = require('charset');

const crawl = callback => queryString => request({
    url : 'https://www.google.com/search',
    encoding: null,
    method: 'GET',
    qs: queryString,
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10
}, (error, response, body) => {
    if (!error && response.statusCode === 200){
        const enc = charset(response.headers, body);
        const decodeResult = iconv.decode(body, enc);
        callback(decodeResult);
    } else {
        console.log(`error ${response.statusCode}`);
    }
}
);

module.exports.crawl = crawl;