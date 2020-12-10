/*
    case 175 : Nodemailer 모듈 3 (p345) 
    => html 형식에 파일 첨부까지 포함한 형태
*/
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '[username]@gmail.com',
        pass: '[password]'
    }
});

const mailOptions = {
    from: '[sender]@gmail.com',
    to: '[reciever]@gmail.com',
    subject: 'hello, three files arrived!!',
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
            filename: 'gooseCall.jpeg',
            path: `${__dirname}/files/gooseCall.jpeg`
    
        },
        {
            filename: 'test.txt',
            path: `${__dirname}/files/test.txt`
    
        },
        {
            filename: 'price.csv',
            path: `${__dirname}/files/price.csv`
    
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