const request = require('request');
const cheerio = require('cheerio');
const schedule = require('node-schedule');
const iconv = require('iconv-lite');
const nodemailer = require('nodemailer');

const url = 'https://news.naver.com/main/list.nhn?mode=LSD&mid=sec&sid1=105';

let title;
const arrayTitle = [];
const date = new Date();


function sendMail(arHeadline){
    // 메일 전송 설정
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '[username]@gmail.com',
            pass: '[password]'
        }
    });

    // 보낼 메일 양식
    const mailOptions = {
        from: '[sender]@gmail.com',
        to: '[reciever]@gmail.com',
        subject: `${date.toLocaleDateString()} Today News`,
        html: 
        `
        <h1>IT/과학 실시간 뉴스 헤드라인</h1>
        <h2>${arHeadline}</h2>
        <br/>
        <a href="http://www.infopub.co.kr">
            <img src="http://www.infopub.co.kr/pdspool/common/main_top/2016-11-02.jpg" />
            </p>
        </a>
        `
    };

    // 메일 전송 검증
    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.log(error);
        } else {
            console.log(`Message send: ${info.response}`);
        }
        transporter.close();
    });
}

const getNews = () => {
    const parse = (decodedResult) => {
        const $ = cheerio.load(decodedResult);
        const titles = $('ul.type06_headline').find('a');
    
        for (let i = 0; i < titles.length; i += 1){
            title = $(titles[i]).text();
            arrayTitle[i] = title.trim();
        }
        return arrayTitle;
    };

    request(
        {
        url: url,
        method: 'GET',
        encoding: null
        }, 
        (err, res, body) => {
            const decodedResult = iconv.decode(body, 'euc-kr');
            const arTitles = parse(decodedResult);
            sendMail(arTitles);
        }
    );

};

// Recurrence Rule Scheduling
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0, 6)];
rule.hour = 14;
rule.minute = 30;
console.log(rule);

const j = schedule.scheduleJob(rule, () => {
    getNews();
});







