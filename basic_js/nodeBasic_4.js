/*
    case 44 ~ case 69
*/

/*
    case 44 ~ case 49 : 함수 (p96)
     => 자바스크립트 함수는 일급 객체이므로 함수를 변수에 넣거나 함수에 파라미터로 전달할 수 있다.
*/

// 등급 조회 함수 

let students = [
    {name : '둘리', age : 10, score : 66},
    { name: '도우너', age: 11, score: 87 },
    { name: '마이클', age: 30, score: 95 },
    { name: '희동', age: 3, score: 9 }
]

let getDegree = score => {
    if (score >= 90){
        return 'A';
    } else if (score >= 80){
        return 'B';
    } else if (score >= 60){
        return 'C';
    } else{
        return 'F';
    }
}

students.forEach( student =>{
    let result = `name : ${student.name}, score : ${getDegree(student.score)}`;
    console.log(result);
});

/*
    case 50 ~ case 52 : 화살표 함수 (p107)
     => 자바스크립트 고유의 특수 함수 표기법
     => 인수가 하나이거나 함수의 연산이 1줄에 끝나는 경우에는 각각 괄호를 생략할 수 있다.
*/
var a = 13; var b = 12;
let sum = (a,b) => a + b; // 1줄인 경우에는 return도 생략 가능!
console.log(sum(a,b));

/*
    case 53 : 콜백 함수 (p112)
     => 특정 함수에 파라매터로 전달된 함수를 지칭함.
     => 콜백함수를 파라매터로 연결하는 형태를 체이닝(chaining)이라고 지칭함.
*/

let funcChild = result => console.group(`결과는 ${result} 입니다.`);

let funcParent = (calResult, callback) => callback(calResult);

funcParent(sum(10,20), funcChild); // sumb을 계산하고 callback이 그 값을 받아 재계산한다!

/*
    case 54 : 함수의 유효 범위 (p114)
*/

// 전역 변수
let resultSubstraction;
function substraction(a, b){
    resultSubstraction = a -b;
}

substraction(100, 50); // resultSubstraction에 값을 할당하는 함수 연산
console.log(resultSubstraction); // 결과값 산출

// 변수에 익명함수 형태로 함수를 정의할 수 있음.
function multiple(a , b) {
    let result = a * b;
    return result;
}

let r = multiple(10, 10); // result를 받는다.
console.log(r);

var tempFunc = multiple; //변수할당을 이용한 함수명 rename

console.log(tempFunc(60,14));

//지역 변수
function addition(a, b){
    let resultSum = a + b;
}

addition(10,30);
// console.log(resultSum); //Uncaught ReferenceError: resultSum is not defined

/*
    case 55 ~ case 69 : Math 관련 연산 식들 (p116)
    => Math.random: 0이상 1미만의 숫자 생성
    => Math.foor: 소수점 이하 버림
    => a부터 b 사이의 난수 생성 :
        1) b 포함: Math.random(b-a+1) + a
        2) b 제외: Math.random(b-1) + a
    => Math.round(n): n을 반올림
    => max, min은 2개 이상의 값에 대해서도 연산이 가능하다.(단 배열식은 전개 연산자로 풀어주어야 연산 가능함!)
    => 
*/

// 20에서 30까지의 랜덤 숫자 생성
let ranNum = Math.random()*(30-20+1) +20
console.log(` raw num = ${ranNum}`);
console.log(` natural num = ${Math.floor(ranNum)}`);
console.log(`round in -2 = ${Math.round(ranNum)}`);
// max/min은 나열된 값에 대하여만 연산 가능(배열 불가능)
var ranNumBox = [10,20,30,40,50];
console.log(`max = ${Math.max(ranNumBox)}, min = ${Math.min(ranNumBox)}`);// NaN 반환
console.log(`max = ${Math.max(10,20,30,-40, 50)}, min = ${Math.min(10,20,30,-40, 50)}`);// 나열식은 항상 가능함!
// 단, 전개 연산자를 쓰는 경우에는 연산 가능하다!
console.log(`max = ${Math.max(...ranNumBox)}, min = ${Math.min(...ranNumBox)}`);// 50, 10 반환

// 절대값 abs
var ranNumBox = {
    numStr:'-1', // 1
    trueNum:-3.1415, // 3.1415
    sglElArr:[2],  // 2
    mulElArr:[1,2], // NaN <= X
    emptyObj:{}, // NaN <= X
    null: null, // 0 <= 숫자로 환원
    emptyStr:'', // 0 <= 숫자로 환원
    emptyArr: [],  // 0 <= 숫자로 환원
    NomalStr: '헤이' // NaN <= X
};

Object.entries(ranNumBox).forEach(entry =>{
    var [key, value] = entry;
    console.log(`${key} = ${Math.abs(value)}`);
});

// pow, squrt, cbrt(=세제곱근)
console.log(`0의 2 제곱 = ${Math.pow(9,2)}`);
console.log(`9의 제곱근 = ${Math.sqrt(9)}`);
console.log(`음수 9의 제곱근 = ${Math.sqrt(-9)}`);// 계산 불가
console.log(`27의 세제곱근 = ${Math.cbrt(27)}`);// 3
console.log(`음수 27의 세제곱근 = ${Math.cbrt(-27)}`);// - 3
console.log(`무한수의 제곱근, 세제곱근 = ${Math.sqrt(Infinity)}, ${Math.cbrt(Infinity)}`);// 무한수 출력

// 부호 함수 : 음수인지 양수인지 구분하는 식
console.log(`Math.sign(-37) => ${Math.sign(-37)}`);// 음수라 -1
console.log(`Math.sign(86) => ${Math.sign(86)}`);// 양수라 1
console.log(`Math.sign(0) => ${Math.sign(0)}`);// 0이라 0
console.log(`Math.sign('글자글자글자') => ${Math.sign('글자글자글자')}`);// 숫자가 아니라 NaN
console.log(`Math.sign(NaN) => ${Math.sign(NaN)}`);// NaN도 NaN 출력
console.log(`Math.sign() => ${Math.sign()}`);// 인자를 넣지 않아도 오류가 뜨지 않고 불능인 NaN으로 처리된다.

//log, log10, log2, log1p
console.log(`Math.log(10) => ${Math.log(10)}`); // log 10진수 결과값
console.log(`Math.log(1) => ${Math.log(1)}`); // 1을 대입시 0이 출력
console.log(`Math.log10(10000000000000) => ${Math.log10(10000000000000)}`); // 13자리수
console.log(`Math.log10(10) => ${Math.log10(10)}`);// logn의 n은 1이 출력
console.log(`Math.log2(64) => ${Math.log2(64)}`);// log2도 별도 존재
// 1p 로그 함수는 e 로그 함수에 해당하며 이 때 대입한 수[log1p(x)의 x]는 정확히는 1+x값으로 연산된다.
console.log(`Math.log1p(1) => ${Math.log1p(1)}`);// 이경우 1이지만 0이 출력되지 않는다. (이유: x=>1+1 = 2이므로 log(2)에 해당하게 됨)
console.log(`Math.log1p(0) => ${Math.log1p(0)}`);// 0을 대입해야 비로소 0이 출력된다. (이유: x=>1+0 = 1이므로 log(1)에 해당하게 됨)

//floor, ceil, trunc
var numberRan = Math.random()*11 +1
console.log(`x = ${numberRan}`);// 현재의 랜덤 숫자
console.log(`Math.floor(x) = ${Math.floor(numberRan)}`); // floor 소숫점 이하 내림
console.log(`Math.ceil(x) = ${Math.ceil(numberRan)}`); // ceil 소수점 이하 올림
// trunc와 floor/ceil의 차이는 해당 숫자의 음양 여부를 떠나서 무조건 소수점 아래를 제외해버린다는 점이다. (문자열의 substring과 비슷함)
console.log(`Math.trunc(x) = ${Math.trunc(numberRan)}`);// trunc 소수점 이하 버림

//exp, expm1 : 자연상수(e)의 지수함수
console.log(`Math.exp(-1) = ${Math.exp(-1)}`);
console.log(`Math.exp(0) = ${Math.exp(0)}`); // 1이 츨력
console.log(`Math.exp(1) = ${Math.exp(1)}`);
//expm1 <=> logp1 로 정확성이 중요할 때 exp 대신 사용하는 함수
console.log(`Math.expm1(-1) = ${Math.expm1(-1)}`);
console.log(`Math.expm1(0) = ${Math.expm1(0)}`); // 0이 출력
console.log(`Math.expm1(1) = ${Math.expm1(1)}`);

// sin, cos, tan : 삼각함수
console.log(`Math.sin(1) = ${Math.sin(1)}`);
console.log(`Math.cos(1) = ${Math.cos(1)}`);
console.log(`Math.tan(1) = ${Math.tan(1)}`);
// asin, acons, atan : 역삼각함수
console.log(`Math.asin(1) = ${Math.asin(1)}`);
console.log(`Math.acos(1) = ${Math.acos(1)}`);
console.log(`Math.atan(1) = ${Math.atan(1)}`);
// sinh, cosh, tanh : 쌍곡함수
console.log(`Math.sinh(1) = ${Math.sinh(1)}`);
console.log(`Math.cosh(1) = ${Math.cosh(1)}`);
console.log(`Math.tanh(1) = ${Math.tanh(1)}`);
// asinh, acosh, atanh : 역쌍곡함수
console.log(`Math.asinh(1) = ${Math.asinh(1)}`);
console.log(`Math.acosh(1) = ${Math.acosh(1)}`);
console.log(`Math.atanh(1) = ${Math.atanh(1)}`);