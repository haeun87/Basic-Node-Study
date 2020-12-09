/*
    case 175 : Nodemailer 모듈 3 (p345) 
    => html 형식에 파일 첨부까지 포함한 형태
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
    html: 
    `
    <h1>Hello HTML</h1>
    <a href="http://www.infopub.co.kr">
        <img src="http://www.infopub.co.kr/pdspool/common/main_top/2016-11-02.jpg" />
        </p>
    </a>
    `,
    attachments: [
        {
            filename: 'text.xlsx',
            path: `${__dirname}/text.xlsx`
    
        }
    ]
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error){
        console.log(error);
    } else {
        console.log(`Message send: ${info.response}`);
        console.log(mailOptions.attachments);
    }
    transporter.close();
});