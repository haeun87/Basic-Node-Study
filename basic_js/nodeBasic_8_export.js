const printhello = () => console.log('hello from outside!');

// 기 생성된 함수를 할당하여 외부화함
exports.printhello = printhello;

// 외부화함과 동시에 함수 선언
exports.prinMessage = (message) => {
    console.log(message);
}