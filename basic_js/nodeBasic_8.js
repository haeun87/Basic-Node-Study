/*
    case 117 ~ case 120
*/

/*
    case 117 ~ case 118 : promise (p222)
    => 콜백의 대안책으로 사용하는 함수
*/
const promiseFirst = new Promise(resolve => resolve(1)).then(result => {
    console.log('promiseFirst completed');
    return `${result + 10}`;
});

const promiseSecond = new Promise(resolve => resolve(2)).then(result => {
    console.log('promiseSecond complted');
    return `${result + 20}`;
});

// all에 지정된 프로미스들의 처리가 끝난 후 then으로 후속 처리를 수행할 수 있다.
Promise.all([promiseFirst, promiseSecond])
.then(result => {
    console.log('promises are complted: result=',result);
    console.log('sum', Number(result[0]) + Number(result[1]));
});

/*
    case 119 ~ case 120 : 함수 외부화, 외부 함수 호출 (p226)
    => 재사용을 위한 함수를 외부화하고 호출하는 법
    => 외부화함수는 nodeBasic_8_export.js에 정의함
*/

const printSomething = require('./nodeBasic_8_export');

printSomething.printhello();
printSomething.prinMessage('now I can say bye~');

// this is end of part 3. Therefore, no more scripts!! :)