/*
    case 133 ~ case 136
*/
/*
    case 133 ~ case 140: http 모듈 (p246)
    
*/

const http = require('http');
const fs = require('fs');
const url = require('url');

/*
// case 133 서버 실행/종료 기본 (p246)

// 서버 생성
const server = http.createServer();

// 서버 실행
server.listen(50000, () =>{
    console.log('서버가 동작 중입니다, http://localhost:50000');
});


// 서버 종료
const testClose = function() {
    server.close();
    console.log('서버가 종료되었습니다, http://127.0.0.1:50000');
};

// 5초 후 강제 종료
setTimeout(testClose, 5000);

*/

/*
    case 134 http event (p248)
    * 주요 이벤트
        1) request : 클라이언트가 요청할 때 발생하는 이벤트
        2) connection : 클라이언트가 접속할 때 발생하는 이벤트
        3) close : 서버가 종료될 때 발생하는 이벤트
        4) clientError : 클라이언트에서 오류가 발생할 때 이벤트
        5) checkContinue : 클라이언트가 지속적인 연결을 유지하고 있을 때의 이벤트 (접속 여부 확인용)

// 서버 생성
const server = http.createServer();

// request 발생시 후속 조치
server.on('request', () => {
    console.log('REQUEST');
});

// connection 발생시 후속 조치
server.on('connection', () => {
    console.log('CONNECTED');
});

// close일 때 후속 조치
server.on('close', () => {
    console.log('CLOSED');
});

// 서버 실행
server.listen(50000, () =>{
    console.log('서버가 동작 중입니다, http://localhost:50000');
});

// 서버 종료
const testClose = function() {
    server.close();
    console.log('서버가 종료되었습니다, http://localhost:50000');
};

// 5초 후 강제 종료
setTimeout(testClose, 10000);
*/

/*

// case 135 ~ case 137 : http response (p250)
    => 관련 html 소스 : nodeBasic_10_example136.html
    => 이미지와 mp3 소스는 저작권 문제로 업로드 안함
    * Content-Type 종류
        1) text : text/plain, text/html, text/css, text/javascript <= 인간이 읽을 수 있는 종류의 text 파일
        2) image : image/gif, image/png, image/jpeg, image/bmp, image/webp <= 비디오는 제외/움짤 포함
        3) audio : audio/midi, audio/mpeg, audio/webm, audio/ogg, audio/wav <= 모든 종류의 오디오 파일
        4) video  : video/webm, video/ogg <= 모든 종류의 비디오 파일




http.createServer((request, response) => {
    // 기본 구조 
    // response.writeHead(200, {'Content-Type': 'text/html' }); // 응답 헤더
    // response.end('Hello World!');// 응답 본문

    // html 업로드
    fs.readFile('./nodeBasic_10_example136.html', (error, data) =>{
        response.writeHead(200, {'Content-Type': 'text/html' });
        response.end(data);
    });

    // 이미지 업로드
    // fs.readFile('./goose.jpg', (error, data) =>{
    //     response.writeHead(200, {'Content-Type': 'image/jpeg' });
    //     response.end(data);
    // });

    // mp3 업로드
    // fs.readFile('./BeeFlying.mp3', (error, data) =>{
    //     response.writeHead(200, {'Content-Type': 'audio/mp3' });
    //     response.end(data);
    // });

}).listen(50000, () => {
    console.log('서버가 동작 중입니다, http://localhost:50000');
});
    
*/

/*
    case 138 ~ case 140 : http request (p257)
    => 관련 html 소스 : nodeBasic_10_example136.html, nodeBasic_10_example138.html, nodeBasic_10_example140.html
*/

http.createServer((request, response) => {

    //각 request path별로 다른 내용 반환
    // let pathname = url.parse(request.url);
    // pathname = url.parse(request.url).pathname;

    // if(pathname === '/'){
    //     fs.readFile('./nodeBasic_10_example138.html', (error, data) => {
    //         response.writeHead(200, {'Content-Type': 'text/html' });
    //         response.end(data);
    //         console.log(url.parse(request.url));
    //     });
    // } else if (pathname === '/example'){
    //     fs.readFile('./nodeBasic_10_example136.html', (error, data) => {
    //         response.writeHead(200, {'Content-Type': 'text/html' });
    //         response.end(data);
    //         console.log(url.parse(request.url));
    //     });
    // }

    // method - get
    // const get = url.parse(request.url, true).query;
    // if (request.method ==='GET'){
    //     response.writeHead(200, {'Content-Type': 'text/html'});
    //     response.end(`<h1>${JSON.stringify(get)}</h1>`);
    //     console.log(`${request.method} 방식의 요청입니다.`);
    // } else if (request.method === 'POST'){
    //     console.log(`${request.method} 방식의 요청입니다.`);
    // }

    // method - get & post
    if (request.method ==='GET'){
        fs.readFile('./nodeBasic_10_example140.html', (error, data) => {
            response.writeHead(200, {'Content-Type': 'text/html' });
            response.end(data);
            console.log(`${request.method} 방식의 요청입니다.`);
        });
    } else if (request.method === 'POST'){
        request.on('data', (data) => {
            response.writeHead(200, {'Content-Type': 'text/html' });
            response.end(data);
            console.log(`${request.method} 방식의 요청입니다.`);
        });
    }
}).listen(50000, () => {
    console.log('서버가 동작 중입니다, http://localhost:50000');
});