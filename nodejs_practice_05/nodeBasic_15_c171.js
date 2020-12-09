/*
    case 171 : node-schedule 모듈 1 (p337) 
*/
const schedule = require('node-schedule');

// 특정 시간에 한 번
const date = new Date(2020, 11, 09, 17, 3, 0);

console.log(date);

const j = schedule.scheduleJob(date, () => {
    console.log('no pain, no gain');
});

// 매 20초마다 수행 설정
const rule = new schedule.RecurrenceRule();
rule.second = 20;


const k = schedule.scheduleJob(rule, () => {
    console.log('Laziness is nothing more than the habit of resting before you get tired.');
});

//작업 취소
//  j.cancel();
//  k.cancel();