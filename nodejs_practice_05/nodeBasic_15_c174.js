/*
    case 174 : Nodemailer 모듈 2 (p343) 
    => html, img 등의 상이한 형식을 포함한 메일을 보내는 방식
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
    subject: 'hello, HTML Mail:)',
    html: 
    `
    <h1>Hello HTML</h1>
    <a href="http://www.infopub.co.kr">
        <img src="http://www.infopub.co.kr/pdspool/common/main_top/2016-11-02.jpg" />
        </p>
    </a>
    `
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error){
        console.log(error);
    } else {
        console.log(`Message send: ${info.response}`);
    }
    transporter.close();
});