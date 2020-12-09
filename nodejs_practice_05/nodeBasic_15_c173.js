/*
    case 173 : Nodemailer 모듈 1 (p341) 
    => text만 보내는 가장 심플한 방식
*/
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'user@gmail.com',
        pass: 'passwd'
    }
});

const mailOptions = {
    from: 'user@gmail.com',
    to: 'user@naver.com',
    subject: 'hello, Myself:)',
    text: 'Hello, Node.js World!!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error){
        console.log(error);
    } else {
        console.log(`Message send: ${info.response}`);
    }
    transporter.close();
});