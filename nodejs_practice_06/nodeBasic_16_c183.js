/*
    case 183 ~ case 185 : socket.io (p368) 
    => client/server 모두 데이터를 전달하는 행위는 emit()로 수행함
    => emit는 이벤트명인 문자열과 이에 대응하는 데이터로 mapping되어 넘어간다.
*/
const app = require('express')();
const server = require('http').createServer(app);

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/nodeBasic_16_c183.html`);
});

const io = require('socket.io')(server);

io.on('connection', (client) => {
    console.log('Client connection');
    client.on('disconnect', () => {
        console.log('Client disconnection');
    });

    // 클라이언트로부터 데이터 수집
    // 내용: 클라이언트가 제출한 데이터를 버튼 이벤트로부터 전달받고 그 전달 받은 내용에 대한 로직을 수행한다.
    client.on('clientMsg', (data) => {
        console.log('This is client Data :', data);
        client.emit('msg', `server recieved THIS message currently => ${data}`);
    });

    // 클라이언트로 메세지 전송
    // 내용: 클라이언트로부터 요청을 먼저 받고 해당 로직을 주기마다 시작한다. 
    client.on('status', () =>{
        console.log('Status event(Server)');
        setInterval(() => {
            client.emit('msg2', 'Hello!! socket.io:)');
        }, 3000);
    });
});

server.listen(3000, () =>{
    console.log('Server is running port 3000! => GOTO http://localhost:3000');
});
