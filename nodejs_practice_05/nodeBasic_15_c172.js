/*
    case 172 : node-schedule 모듈 2 (p339) 
*/
const schedule = require('node-schedule');

// Cron-style Scheduling
// 매분의 00초를 지날 때마다 작업 수행
const j = schedule.scheduleJob('00 * * * * *', () => {
    console.log('Cron-style Scheduling');
});

// Recurrence Rule Scheduling
// 매분의 30초를 지날 때마다 작업 수행
const rule = new schedule.RecurrenceRule();
rule.second = 30;
const k = schedule.scheduleJob(rule, () => {
    console.log('Recurrence Rule Scheduling');
});
